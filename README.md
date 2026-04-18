# AI-Pass Frontend Prototype

## Overview

This project is a frontend prototype of the AI-Pass platform, built as part of a technical evaluation task. It demonstrates a clean, structured SaaS interface with multiple AI-driven modules.

The focus of this project is on UI structure, usability, and component-based architecture rather than backend functionality.

---

## Features

### Dashboard

* Welcome section
* Quick action cards
* Recent activity list
* Shortcuts to key modules

### AI Apps

* Displays AI applications as structured cards
* Includes name, description, category, and status

### Analysis Studio

* Dataset upload placeholder
* Dataset summary (rows, missing values, quality)
* Insight cards
* Anomaly detection section
* Visualization suggestions

### AI Task Runner

* Select task type (summarize, analyze, classify)
* Input text area
* Mock AI output including:

  * Result
  * Explanation
  * Confidence
  * Steps

### Usage Page

* Current plan
* Requests used
* Remaining quota
* Upgrade button

---

## Tech Stack

* React (Vite)
* TypeScript
* CSS (custom styling)
* React Router

---

## Project Structure

* `src/components` → reusable UI components (Card, Sidebar, etc.)
* `src/pages` → main pages (Dashboard, AI Apps, Analysis Studio, Task Runner, Usage)
* `src/App.tsx` → routing and layout

---

## Mock Data

All AI-related functionality is simulated using mock JSON data to represent expected backend responses.

---

## Design Approach

* Clean and minimal SaaS-style UI
* Reusable components for consistency
* Focus on readability and structure
* Simple and intuitive navigation

---

## Future Improvements

* Add real backend (Node.js or Django)
* Connect to real AI APIs
* Improve responsiveness for mobile devices
* Add authentication system
* Enhance UI/UX with better styling and animations

---

## Live Demo

(Add your Vercel/Netlify link here)

---

## Author

Rawan Adeeb Alahmad
