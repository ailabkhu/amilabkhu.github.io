---
layout: page
title: Logo
subtitle: Official logos of the AMI Lab and Kyung Hee University
permalink: /logo/
ami_logos:
  - label: "Symbol"
    note: "Emblem only"
    red: "LOGO_RED"
    blue: "LOGO_BLUE"
  - label: "Stacked &middot; AMI LAB"
    note: "Emblem above short wordmark"
    red: "AMILAB_RED_1"
    blue: "AMILAB_BLUE_1"
  - label: "Stacked &middot; Full name"
    note: "Emblem above full wordmark"
    red: "AUGMENTED_RED_1"
    blue: "AMILAB_BLUE_1_1"
  - label: "Horizontal &middot; AMI LAB"
    note: "Emblem beside short wordmark"
    red: "AMI_RED_2"
    blue: "AMI_BLUE_2"
  - label: "Horizontal &middot; Full name"
    note: "Emblem beside full wordmark"
    red: "AUGMENTED_RED_2"
    blue: "AUGMENTED_BLUE_2"
khu_logos:
  - label: "Emblem"
    note: "Crest with curved university name"
    stem: "KHU_emblem"
  - label: "Stacked"
    note: "Crest above English wordmark"
    stem: "KHU_vertical_en"
  - label: "Horizontal"
    note: "Crest beside English wordmark"
    stem: "KHU_horizontal_en"
  - label: "KHU mark"
    note: "Letter mark only"
    stem: "KHU_mark"
---

<style>
.logo-set-input {
  position: absolute;
  width: 1px; height: 1px;
  opacity: 0;
}
.logo-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid #ddd;
}
.logo-tabs label {
  margin-bottom: -1px;
  padding: 0.5rem 1.1rem;
  border: 1px solid transparent;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  font-weight: 700;
  color: #888;
  cursor: pointer;
}
.logo-tabs label:hover { color: #990F19; }
#set-ami:checked ~ .logo-tabs label[for="set-ami"],
#set-khu:checked ~ .logo-tabs label[for="set-khu"] {
  color: #990F19;
  background-color: #fff;
  border-color: #ddd;
}
#set-ami:focus ~ .logo-tabs label[for="set-ami"],
#set-khu:focus ~ .logo-tabs label[for="set-khu"] { outline: 2px solid #0F2E62; outline-offset: 2px; }

.logo-panel { display: none; }
#set-ami:checked ~ .logo-panel-ami,
#set-khu:checked ~ .logo-panel-khu { display: block; }

.logo-allbtn {
  display: inline-block;
  padding: 0.55rem 1.1rem;
  background-color: #990F19;
  color: #fff !important;
  border-radius: 4px;
  font-weight: 700;
  text-decoration: none !important;
}
.logo-allbtn:hover { background-color: #0F2E62; }
.logo-allbtn .logo-allbtn-sub { font-weight: 400; opacity: 0.8; }

.logo-section-title {
  margin: 2.2rem 0 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #ddd;
  font-size: 1.25rem;
  font-weight: 700;
}
.logo-swatches { font-size: 0.85rem; color: #777; font-weight: 400; margin-left: 0.5rem; }
.logo-chip {
  display: inline-block;
  width: 0.8rem; height: 0.8rem;
  border-radius: 2px;
  vertical-align: -1px;
  margin-right: 0.2rem;
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.1rem;
}
.logo-card {
  position: relative;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
}
.logo-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 170px;
  padding: 1.1rem;
  background-color: #fafafa;
  border-bottom: 1px solid #eee;
}
.logo-preview img { max-width: 100%; max-height: 100%; }

/* Format buttons: revealed when the cursor is over the card */
.logo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 170px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem;
  background-color: rgba(255, 255, 255, 0.94);
  opacity: 0;
  transition: opacity 0.18s ease-in-out;
}
.logo-card:hover .logo-overlay,
.logo-card:focus-within .logo-overlay { opacity: 1; }
.logo-overlay a {
  padding: 0.3rem 0.75rem;
  border: 1px solid #990F19;
  border-radius: 3px;
  background-color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #990F19 !important;
  text-decoration: none !important;
}
.logo-overlay a:hover,
.logo-overlay a:focus { background-color: #990F19; color: #fff !important; }
.logo-meta { padding: 0.7rem 0.9rem 0.8rem; }
.logo-name { font-weight: 700; font-size: 0.95rem; }
.logo-note { font-size: 0.8rem; color: #888; }

/* Touch devices have no hover: lay the buttons out under the preview instead */
@media (hover: none) {
  .logo-overlay {
    position: static;
    height: auto;
    opacity: 1;
    background-color: transparent;
    justify-content: flex-start;
    padding: 0.7rem 0.9rem 0;
  }
}

.logo-usage { margin-top: 2.5rem; font-size: 0.9rem; color: #666; }
.logo-usage li { margin-bottom: 0.25rem; }
</style>

<div class="logo-sets">
<input type="radio" name="logoset" id="set-ami" class="logo-set-input" checked>
<input type="radio" name="logoset" id="set-khu" class="logo-set-input">

<div class="logo-tabs">
<label for="set-ami">AMI Lab</label>
<label for="set-khu">Kyung Hee University</label>
</div>

<div class="logo-panel logo-panel-ami">

<p>
<a class="logo-allbtn" href="{{ '/assets/logo/ami/AMI_LAB_logo_pack.zip' | relative_url }}" download>
Download all AMI Lab logos <span class="logo-allbtn-sub">(ZIP, 7 MB &middot; incl. Illustrator .ai source)</span>
</a>
</p>

{% assign variants = "red,blue" | split: "," %}
{% for variant in variants %}
{% if variant == "red" %}
<div class="logo-section-title">
Red
<span class="logo-swatches"><span class="logo-chip" style="background:linear-gradient(135deg,#b30004,#8f000d)"></span>#B30004 &rarr; #8F000D</span>
</div>
{% else %}
<div class="logo-section-title">
Blue
<span class="logo-swatches"><span class="logo-chip" style="background:linear-gradient(135deg,#003373,#002453)"></span>#003373 &rarr; #002453</span>
</div>
{% endif %}

<div class="logo-grid">
{% for logo in page.ami_logos %}
{% if variant == "red" %}{% assign stem = logo.red %}{% else %}{% assign stem = logo.blue %}{% endif %}
<div class="logo-card">
<div class="logo-preview">
<img src="{{ '/assets/logo/ami/SVG/' | append: stem | append: '.svg' | relative_url }}" alt="AMI Lab logo &mdash; {{ logo.label }} ({{ variant }})" loading="lazy">
</div>
<div class="logo-overlay">
<a href="{{ '/assets/logo/ami/SVG/' | append: stem | append: '.svg' | relative_url }}" download="AMI_LAB_{{ stem }}.svg" title="Download SVG (vector)">SVG</a>
<a href="{{ '/assets/logo/ami/PNG/' | append: stem | append: '.png' | relative_url }}" download="AMI_LAB_{{ stem }}.png" title="Download PNG (transparent background)">PNG</a>
<a href="{{ '/assets/logo/ami/PDF/' | append: stem | append: '.pdf' | relative_url }}" download="AMI_LAB_{{ stem }}.pdf" title="Download PDF (vector)">PDF</a>
<a href="{{ '/assets/logo/ami/JPEG/' | append: stem | append: '.jpg' | relative_url }}" download="AMI_LAB_{{ stem }}.jpg" title="Download JPG (white background)">JPG</a>
</div>
<div class="logo-meta">
<div class="logo-name">{{ logo.label }}</div>
<div class="logo-note">{{ logo.note }}</div>
</div>
</div>
{% endfor %}
</div>
{% endfor %}

<div class="logo-usage" markdown="1">
**Usage**

- Keep the original proportions and colors; please do not stretch, rotate or recolor the logo.
- Leave clear space around the logo — at least the height of the emblem's circle.
- Place the logo on a plain, light background whenever possible.
- For any other use, or if you need a different file format, contact [Ka Young Kim](mailto:uwrgoy7584@gmail.com).
</div>

</div>

<div class="logo-panel logo-panel-khu">

<p>
<a class="logo-allbtn" href="{{ '/assets/logo/khu/KHU_logo_pack.zip' | relative_url }}" download>
Download all KHU logos <span class="logo-allbtn-sub">(ZIP, 8 MB &middot; incl. Illustrator .ai source)</span>
</a>
</p>

<div class="logo-section-title">
Kyung Hee University
<span class="logo-swatches"><span class="logo-chip" style="background:#253a71"></span>#253A71<span class="logo-chip" style="background:#9c1c1f; margin-left:0.5rem"></span>#9C1C1F<span class="logo-chip" style="background:#b4975a; margin-left:0.5rem"></span>#B4975A</span>
</div>

<div class="logo-grid">
{% for logo in page.khu_logos %}
<div class="logo-card">
<div class="logo-preview">
<img src="{{ '/assets/logo/khu/SVG/' | append: logo.stem | append: '.svg' | relative_url }}" alt="Kyung Hee University logo &mdash; {{ logo.label }}" loading="lazy">
</div>
<div class="logo-overlay">
<a href="{{ '/assets/logo/khu/SVG/' | append: logo.stem | append: '.svg' | relative_url }}" download="{{ logo.stem }}.svg" title="Download SVG (vector)">SVG</a>
<a href="{{ '/assets/logo/khu/PNG/' | append: logo.stem | append: '.png' | relative_url }}" download="{{ logo.stem }}.png" title="Download PNG (transparent background)">PNG</a>
<a href="{{ '/assets/logo/khu/PDF/' | append: logo.stem | append: '.pdf' | relative_url }}" download="{{ logo.stem }}.pdf" title="Download PDF (vector)">PDF</a>
<a href="{{ '/assets/logo/khu/JPEG/' | append: logo.stem | append: '.jpg' | relative_url }}" download="{{ logo.stem }}.jpg" title="Download JPG (white background)">JPG</a>
</div>
<div class="logo-meta">
<div class="logo-name">{{ logo.label }}</div>
<div class="logo-note">{{ logo.note }}</div>
</div>
</div>
{% endfor %}
</div>

<div class="logo-usage" markdown="1">
**Usage**

- These are Kyung Hee University's official marks. Use them according to the university's CI guidelines and do not redraw or recolor them.
- Keep the original proportions and leave clear space around the mark.
- For any other use, or if you need a different file format, contact [Ka Young Kim](mailto:uwrgoy7584@gmail.com).
</div>

</div>
</div>
