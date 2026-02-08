# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Lokin (Lauckin), an iOS focus/productivity app. The site hosts privacy policy and support documentation pages, deployed via GitHub Pages at lokin.live.

## Repository Structure

- **index.html**: Main landing page with tabbed interface for Privacy Policy and Support
- **privacy/index.html**: Standalone privacy policy page
- **support/index.html**: Standalone support/FAQ page
- **terms/index.html**: Standalone terms & conditions page
- **Data_policy_text.md**: Source markdown for privacy policy (verbatim legal text)
- **lokin_support_text.md**: Source markdown for support/FAQ content (verbatim text)
- **CNAME**: Custom domain configuration for GitHub Pages (lokin.live)

## Deployment

The site is hosted on GitHub Pages. Simply push changes to the main branch to deploy. No build step is required as this is a static HTML site.

## Content Updates

**Important**: The text in index.html must remain verbatim from the source markdown files for legal purposes.

To update content:
1. Update the source markdown files first
2. Copy the exact text into index.html, preserving all wording
