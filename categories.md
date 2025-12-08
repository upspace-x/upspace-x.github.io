# 📂 Category Naming Guide

Use these exact names in your Markdown frontmatter under `category:`.  
They will automatically generate clean URLs and consistent listings.

| Category       | URL Slug Example                          | Icon |
|----------------|-------------------------------------------|------|
| Entertainment  | `/entertainment/egungun-of-lagos-flaunts` | 🎬   |
| Technology     | `/technology/future-of-ai`                | 💻   |
| Business       | `/business/startup-funding-trends`        | 💼   |
| NewsInsights   | `/newsinsights/global-market-update`      | 📰   |
| Education      | `/education/top-scholarships-2026`        | 📚   |
| CareersJobs    | `/careersjobs/how-to-land-your-dream-role`| 📈   |
| Sports         | `/sports/world-cup-highlights`            | ⚽   |
| Lifestyle      | `/lifestyle/minimalist-living-guide`      | 🌿   |
| Health         | `/health/mental-wellness-tips`            | ❤️   |
| Opinion        | `/opinion/social-media-and-society`       | ✍️   |

---

## ✅ Rules
- **Frontmatter `category:`** must match one of these names exactly.  
- **Slug:** comes from the filename (e.g. `my-new-article.md`).  
- **Final URL:** `/category/slug` → `/technology/my-new-article`.  
- **Category listing:** `/blog/category` → `/blog/technology`.  

---

## 🚀 Example Frontmatter

```md
---
title: "Top 10 AI Trends for 2026"
date: "2025-12-08"
excerpt: "A look at the most important AI developments shaping 2026."
author: "Quadri"
category: "Technology"
tags: ["AI", "future", "innovation"]
image: "/images/posts/ai-trends-2026.jpg"
featured: false
---