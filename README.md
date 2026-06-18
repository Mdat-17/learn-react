# learn-react
Learning ReactJS - Exercises, notes.
## 📝 Lesson 1: Props and Callbacks (Next.js)

The `lesson-1-props-callback` directory contains practical code demonstrating how to pass data and handle communication between components in React/Next.js.

### Core Concepts

1. **Props (Properties):**
   * Used to pass data from a parent component (`Parent.jsx`) down to a child component (`Child3.jsx`).
   * **Key Feature:** Data flow is **one-way** (unidirectional). Props are **Read-only**; the child component receives them to display or use, but cannot modify them directly.

2. **Callback Functions:**
   * Essentially passing a function from a parent component down to a child component as an argument via props.
   * **Use Case:** Allows the child component to trigger an action or pass data **back up** to the parent component when an event occurs (e.g., clicking a button).

### File Structure
- `page.tsx`: The main route file that contains and renders the parent component.
- `Parent.jsx`: The parent component that holds the state and defines the callback function.
- `Child3.jsx`: The child component that receives props and triggers the callback passed from the parent.

---
*Tip: Always ensure the callback function is correctly bound and scoped when passed through props.*
