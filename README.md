# Program 15 – Create a Custom Hook for Toggling Values

## Aim

Create a custom React Hook named `useToggle` for toggling a Boolean value between:

```text
true
```

and

```text
false
```

The custom hook should be used in a React component to display and change the current status.

---

# Learning Objectives

After completing this practical, students will be able to:

* Understand React Custom Hooks.
* Create a reusable custom Hook.
* Use `useState` inside a custom Hook.
* Maintain Boolean state.
* Toggle a value between `true` and `false`.
* Return state and a function from a custom Hook.
* Use a custom Hook inside a React component.
* Test the functionality using React Testing Library.
* Use GitHub Actions for automated testing.
* Deploy a React application using GitHub Pages.

---

# Problem Statement

Create a custom Hook called:

```javascript
useToggle
```

The Hook should maintain a Boolean value.

When the toggle function is called:

```text
false → true
```

and:

```text
true → false
```

---

# Required Custom Hook

Create the following file:

```text
src/useToggle.js
```

The Hook should follow this basic structure:

```javascript
import { useState } from "react";

function useToggle(initialValue = false) {

  // Create Boolean state

  // Create toggle function

  // Return value and toggle function
}

export default useToggle;
```

---

# Expected Hook Usage

The custom Hook should be used inside `App.js`:

```javascript
const [isOn, toggle] = useToggle(false);
```

The value should be displayed using:

```javascript
{isOn ? "ON" : "OFF"}
```

The button should call:

```javascript
onClick={toggle}
```

---

# Expected Behaviour

Initially:

```text
Status: OFF
```

After clicking the Toggle button once:

```text
Status: ON
```

After clicking the Toggle button again:

```text
Status: OFF
```

The complete behaviour is:

```text
        Toggle
          ↓
       ┌──────┐
       │ OFF  │
       └──┬───┘
          │
       Toggle
          ↓
       ┌──────┐
       │ ON   │
       └──┬───┘
          │
       Toggle
          ↓
       ┌──────┐
       │ OFF  │
       └──────┘
```

---

# Expected Website

The application should contain a simple interface similar to:

```text
┌──────────────────────────────────────┐
│                                      │
│          Custom Toggle Hook          │
│                                      │
│       ┌──────────────────────┐       │
│       │                      │       │
│       │     Status: OFF      │       │
│       │                      │       │
│       │      [ Toggle ]      │       │
│       │                      │       │
│       └──────────────────────┘       │
│                                      │
└──────────────────────────────────────┘
```

After clicking the button:

```text
┌──────────────────────────────────────┐
│                                      │
│          Custom Toggle Hook          │
│                                      │
│       ┌──────────────────────┐       │
│       │                      │       │
│       │      Status: ON      │       │
│       │                      │       │
│       │      [ Toggle ]      │       │
│       │                      │       │
│       └──────────────────────┘       │
│                                      │
└──────────────────────────────────────┘
```

---

# Required Files

The project should contain:

```text
src/
│
├── App.js
├── App.test.js
├── useToggle.js
├── index.js
└── index.css
```

---

# Installation

Open the terminal inside the project folder and run:

```bash
npm install
```

---

# Run the Application

Run:

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

---

# Run Test Cases

Run:

```bash
npm test
```

The test cases verify:

1. Initial value is `OFF`.
2. Clicking Toggle changes `OFF` to `ON`.
3. Clicking Toggle again changes `ON` to `OFF`.
4. Toggle button exists.

---

# Build the Application

Run:

```bash
npm run build
```

The production build will be generated in:

```text
build/
```

---

# GitHub Submission Procedure

Students must:

1. Create a GitHub repository.
2. Add the provided project files.
3. Run `npm install`.
4. Complete the custom Hook.
5. Run the test cases.
6. Commit the changes.
7. Push the project to GitHub.
8. Check GitHub Actions.
9. Verify GitHub Pages deployment.
10. Submit the repository URL and deployed website URL.

---

# GitHub Actions

This repository contains:

```text
.github/workflows/autograding.yml
.github/workflows/deploy.yml
```

## Autograding

The autograding workflow checks:

* `useToggle.js` exists.
* `useState` is used.
* `useToggle` is defined.
* A toggle function is implemented.
* The Hook is imported into `App.js`.
* The Hook is used in `App.js`.
* The application contains a Toggle button.
* Test cases pass.
* The React application builds successfully.

---

# GitHub Pages Deployment

The deployment workflow automatically builds and publishes the application.

Go to:

```text
Repository
   ↓
Settings
   ↓
Pages
   ↓
Build and deployment
   ↓
Source
   ↓
GitHub Actions
```

Select:

```text
GitHub Actions
```

After the student pushes the project to GitHub, the deployment workflow will publish the application.

---

# Deployment URL

After successful deployment, the website will normally be available at:

```text
https://USERNAME.github.io/REPOSITORY-NAME/
```

For example:

```text
https://studentname.github.io/Program16-CustomHook/
```

---

# Student Submission

Students must submit:

```text
Student Name:
Register Number:

GitHub Repository URL:
____________________________________

GitHub Pages URL:
____________________________________

Autograding Status:
PASS / FAIL

Deployment Status:
SUCCESS / FAILED
```

---

# Evaluation Criteria

| Component                       |  Marks |
| ------------------------------- | -----: |
| Create `useToggle` custom Hook  |      3 |
| Use `useState` correctly        |      2 |
| Toggle true/false functionality |      2 |
| Use Hook in React component     |      1 |
| Test cases                      |      1 |
| GitHub Actions + GitHub Pages   |      1 |
| **Total**                       | **10** |

---

# Final Checklist

Before submitting, verify:

* [ ] `useToggle.js` exists.
* [ ] `useState` is used.
* [ ] Initial value is `false`.
* [ ] Toggle changes `false` to `true`.
* [ ] Toggle changes `true` to `false`.
* [ ] `useToggle` is imported into `App.js`.
* [ ] Toggle button is displayed.
* [ ] `npm test` passes.
* [ ] `npm run build` succeeds.
* [ ] GitHub Actions Autograding passes.
* [ ] GitHub Pages deployment succeeds.
* [ ] GitHub repository URL is submitted.
* [ ] Live GitHub Pages URL is submitted.

---

# Program 16 Completed

**Program:** Create a custom Hook for toggling values (`true/false`).

**Technology:** React + Custom Hooks + useState + React Testing Library + GitHub Actions + GitHub Pages

**Submission:** GitHub Repository URL + Live GitHub Pages URL
