---
layout: page
title: Logo
subtitle: Official logos of the Augmented Intelligence Lab
permalink: /logo/
logos:
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
---

<style>
.logo-intro { margin-bottom: 1.5rem; }
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

<div class="logo-intro" markdown="1">
Hover over a logo (or tap it on a phone) and click a format to download that file. **SVG** and **PDF** are vector files that stay sharp at any size — use them for posters, slides and print. **PNG** has a transparent background; **JPG** has a white background.
</div>

<p>
  <a class="logo-allbtn" href="{{ '/assets/logo/AMI_LAB_logo_pack.zip' | relative_url }}" download>
    Download all logos <span class="logo-allbtn-sub">(ZIP, 7 MB &middot; incl. Illustrator .ai source)</span>
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
  {% for logo in page.logos %}
  {% if variant == "red" %}{% assign stem = logo.red %}{% else %}{% assign stem = logo.blue %}{% endif %}
  <div class="logo-card">
  <div class="logo-preview">
  <img src="{{ '/assets/logo/SVG/' | append: stem | append: '.svg' | relative_url }}" alt="AMI Lab logo &mdash; {{ logo.label }} ({{ variant }})" loading="lazy">
  </div>
  <div class="logo-overlay">
  <a href="{{ '/assets/logo/SVG/' | append: stem | append: '.svg' | relative_url }}" download="AMI_LAB_{{ stem }}.svg" title="Download SVG (vector)">SVG</a>
  <a href="{{ '/assets/logo/PNG/' | append: stem | append: '.png' | relative_url }}" download="AMI_LAB_{{ stem }}.png" title="Download PNG (transparent background)">PNG</a>
  <a href="{{ '/assets/logo/PDF/' | append: stem | append: '.pdf' | relative_url }}" download="AMI_LAB_{{ stem }}.pdf" title="Download PDF (vector)">PDF</a>
  <a href="{{ '/assets/logo/JPEG/' | append: stem | append: '.jpg' | relative_url }}" download="AMI_LAB_{{ stem }}.jpg" title="Download JPG (white background)">JPG</a>
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
