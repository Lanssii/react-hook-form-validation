# 📝 Agent Registration Form (React + React Hook Form)

A college assignment project focused on frontend development. This application implements a dynamic user registration form for agents
with a Georgian interface, real-time input validation, and interactive visual state styling.

## 🚀 Features

- **Real-time Validation:** Form validation triggers immediately on user input (`mode: "onChange"`).
- **Phone Number Verification:** Matches Georgian mobile number standards (starts with `5`, exactly 9 digits).
- **Email Validation:** Ensures proper email syntax using robust regular expressions.
- **Interactive Visual States (`CSS`):**
  - 🟢 **Green Border:** Input is valid and successfully verified.
  - 🔴 **Red Border:** Input triggers a validation error or is left empty (required field).
- **Form Management:** Instantly resets all fields via the "Cancel" button or automatically upon a successful form submission.
- **Responsive Design:** Fully optimized layout for mobile devices using CSS media queries.

---

## 📂 Project Structure

The project follows a component-based structure inside the `src` directory:

```
src/
└── components/
    └── Form/
        ├── Form.jsx  # Form component and React Hook Form logic
        └── Form.css  # Styles for layout, input states, and media queries
```

---

## 🛠️ Tech Stack

- **React.js** (JavaScript)
- **React Hook Form** (State management and form validation)
- **CSS3** (Flexbox, custom transitions, `box-shadow` state changes, and media queries)

---

## 💻 Installation and Setup

### 1. Create the Repository

Initialize Git and Link Repository

### 2. Install Dependencies

This project requires the `react-hook-form` library.

```bash
npm install react-hook-form
```

### 3. Run the Development Server

```bash
npm run dev
```

---

## 🔍 Validation Rules Matrix

| Field          | Placeholder      | Validation Rules                     | Error Message                              |
| :------------- | :--------------- | :----------------------------------- | :----------------------------------------- |
| **First Name** | სახელი           | Required, minimum 2 characters       | სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს   |
| **Last Name**  | გვარი            | Required, minimum 2 characters       | გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს    |
| **Email**      | ელ-ფოსტა         | Required, valid email pattern        | ელ-ფოსტა არასწორია                         |
| **Phone**      | ტელეფონის ნომერი | Required, Georgian format `^5\d{8}$` | შეიყვანეთ სწორი მობილურის ნომერი 5xxxxxxxx |

## Preview

![App Screenshot](![alt text](image.png))
![App Screenshot](![alt text](image-1.png))
![App Screenshot](![alt text](image-2.png))

## 🧠 What I Learned

How to manage forms in React efficiently
How react-hook-form simplifies validation logic
How to build real-time validation UX
How to create dynamic UI states (error/success)
How to structure a clean React component project

## Notes

This project was created for educational purposes
Focused on React fundamentals and form validation
Designed as a clean portfolio-ready frontend project
