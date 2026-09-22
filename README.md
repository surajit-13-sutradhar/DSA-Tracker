# DSA Tracker

A single-file, dark-themed tracker for Striver's A2Z DSA Sheet — 452 problems, sorted into 22 topic-wise categories (Basics, Arrays, Binary Search, Linked List, Graphs, Dynamic Programming, Tries, Maths, and so on), with per-category and overall progress, a search filter, and checkboxes that persist locally in the browser.

## Credits

The problem links come from [Spynoodles](https://github.com/Spynoodles)'s [Striver-Take-U-Forward-GFG-Links](https://github.com/Spynoodles/Striver-Take-U-Forward-GFG-Links) repo. Thank you for scraping and sharing the full set of links — it saved a huge amount of manual work and made this tracker possible.

## What it does

- Groups all 452 problems by topic, matching the structure of Striver's A2Z sheet
- Every problem link opens in a new tab
- Checkboxes mark problems done, with live progress bars per category and overall
- Search box filters problems by title across all categories
- Expand/collapse-all controls, sticky sidebar for quick navigation

## Files

- `dsa_tracker.html` — the tracker itself, open it directly in any browser

## Status

Progress is currently saved with `localStorage`, so it's local to one browser and device.

## Roadmap

- Persistent storage on a real backend
- Username/password login
- PHP + Laravel stack for the above

## Source data

Built from `Scrapped_Links.csv` (Problem, Link columns) from the repo linked above.