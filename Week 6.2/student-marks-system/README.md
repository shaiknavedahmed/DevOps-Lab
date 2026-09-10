# Student Marks Management System

A React-based Student Marks and Grade Management System developed using **React and Vite**.

The application allows faculty members to select students, enter and update subject marks, and view the calculated total, average, grade, and pass/fail status.

## 🚀 Live Demo

[Student Marks Management System](https://student-marks-system3.vercel.app/)

## 📌 Features

- Display a list of students
- Display student ID, name, and department
- Select a student
- Enter and update marks for different subjects
- Automatic calculation of total marks
- Automatic calculation of average marks
- Automatic grade calculation
- Pass/Fail status
- Marks validation between 0 and 100
- Reusable React components
- Props for passing student and marks information
- React `useState()` for dynamic state management
- Responsive and modern user interface

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript
- HTML
- CSS
- React Hooks (`useState`)
- Vercel

## 📂 Project Structure

```text
student-marks-system/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── StudentList.jsx
│   │   ├── Student.jsx
│   │   ├── MarksForm.jsx
│   │   ├── Result.jsx
│   │   └── Grade.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
