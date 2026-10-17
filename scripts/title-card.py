"""Make a branded title-card cover (1200x630 JPEG) for a post.

Used when no stock photo can be fetched (Pyla's choice, 2026-10-17).
Usage: python3 scripts/title-card.py <slug> "<headline>" "<section label>"
Writes public/images/posts/<slug>/cover.jpg
"""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONT = ROOT / "node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2"
LOGO = ROOT / "public/brand/techspotlight-wordmark-on-dark@2x.png"
W, H, PAD = 1200, 630, 72
NIGHT, INK, AMBER, WHITE, VIOLET = (20, 18, 51), (34, 28, 90), (255, 174, 26), (255, 255, 255), (171, 167, 214)


def font(size, weight):
    f = ImageFont.truetype(str(FONT), size)
    f.set_variation_by_axes([weight])
    return f


def wrap(draw, text, f, width):
    lines, line = [], ""
    for word in text.split():
        test = f"{line} {word}".strip()
        if draw.textlength(test, font=f) <= width:
            line = test
        else:
            lines.append(line)
            line = word
    lines.append(line)
    return lines


def main(slug, headline, label):
    img = Image.new("RGB", (W, H), NIGHT)
    d = ImageDraw.Draw(img)
    for y in range(H):  # soft night-to-ink gradient
        t = y / H
        d.line([(0, y), (W, y)], fill=tuple(int(NIGHT[i] + (INK[i] - NIGHT[i]) * t) for i in range(3)))

    logo = Image.open(LOGO).convert("RGBA")
    logo = logo.resize((332, 48), Image.LANCZOS)
    img.paste(logo, (PAD, PAD - 8), logo)

    lf = font(26, 600)
    d.text((PAD, 168), label.upper(), font=lf, fill=AMBER)

    for size in (64, 58, 52, 46, 40):
        hf = font(size, 700)
        lines = wrap(d, headline, hf, W - 2 * PAD)
        if len(lines) <= 4:
            break
    y = 214
    for line in lines:
        d.text((PAD, y), line, font=hf, fill=WHITE)
        y += int(size * 1.22)

    d.rectangle([PAD, H - PAD - 6, PAD + 120, H - PAD], fill=AMBER)
    d.text((PAD + 140, H - PAD - 16), "TechSpotlight News", font=font(22, 400), fill=VIOLET)

    out = ROOT / "public/images/posts" / slug / "cover.jpg"
    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "JPEG", quality=88, optimize=True)
    print(out, out.stat().st_size // 1024, "KB")


if __name__ == "__main__":
    if len(sys.argv) != 4:
        sys.exit(__doc__)
    main(*sys.argv[1:])
