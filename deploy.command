#!/bin/bash
# One-click deploy for IELTS Writing Coach.
# Double-click this file in Finder to commit and push whatever is
# currently in this folder to GitHub (origin/main).

cd "$(dirname "$0")"

echo "=========================================="
echo " IELTS Writing Coach — Deploy to GitHub"
echo "=========================================="
echo ""

git add -A

if git diff --cached --quiet; then
  echo "No new changes to commit — checking for unpushed commits..."
else
  git commit -m "Update IELTS Writing Coach site - $(date '+%Y-%m-%d %H:%M')"
fi

echo ""
echo "Pushing to origin/main..."
git push origin main

echo ""
echo "=========================================="
echo " Done! Check the output above for errors."
echo " Your site: https://lexilink-ideation.github.io/IELTS-writing-coach/"
echo "=========================================="
echo ""
echo "Press Enter to close this window."
read
