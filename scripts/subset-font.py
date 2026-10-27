# /// script
# requires-python = ">=3.10"
# dependencies = ["fonttools[woff]>=4.50"]
# ///
"""Subset the full LXGW WenKai Screen font to the characters in the charset file.

Run via `pnpm font:subset` (needs uv). The upstream TTF is cached in .cache/fonts/.
"""

import urllib.request
from pathlib import Path

from fontTools import subset

FONT_VERSION = "v1.530"
FONT_URL = (
    "https://github.com/lxgw/LxgwWenKai-Screen/releases/download/"
    f"{FONT_VERSION}/LXGWWenKaiScreen.ttf"
)

root_dir = Path(__file__).resolve().parent.parent
cache_file = root_dir / ".cache/fonts" / f"LXGWWenKaiScreen-{FONT_VERSION}.ttf"
chars_file = root_dir / "src/assets/fonts/lxgwwenkaiscreen-page.chars.txt"
output_file = root_dir / "src/assets/fonts/lxgwwenkaiscreen-page.woff2"

if not cache_file.exists():
    cache_file.parent.mkdir(parents=True, exist_ok=True)
    print(f"Downloading {FONT_URL}")
    urllib.request.urlretrieve(FONT_URL, cache_file)

options = subset.Options()
options.flavor = "woff2"
options.hinting = False
options.desubroutinize = True
options.layout_features = ["*"]

font = subset.load_font(str(cache_file), options)
subsetter = subset.Subsetter(options)
subsetter.populate(text=chars_file.read_text(encoding="utf-8"))
subsetter.subset(font)
subset.save_font(font, str(output_file), options)

print(f"Wrote {output_file.relative_to(root_dir)} ({output_file.stat().st_size / 1024:.1f} KB)")
