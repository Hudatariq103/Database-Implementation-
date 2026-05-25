<div align="center">

# 🎓 Student Record Manager

### A simple full-stack web app to manage student records using ASP.NET Core, SQL Server, HTML, CSS, and JavaScript.

![ASP.NET Core](https://img.shields.io/badge/Backend-ASP.NET%20Core-blue?style=for-the-badge)
![SQL Server](https://img.shields.io/badge/Database-SQL%20Server-red?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/Frontend-JavaScript-yellow?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

</div>

---

## 📌 About the Project

**Student Record Manager** is a simple database-connected web application that allows users to manage student records.

The application provides basic CRUD functionality where users can add, view, update, and delete student information.  
It is built using a frontend connected with an ASP.NET Core Web API backend and SQL Server database.

---

## ✨ Features

- 📋 View all student records
- ➕ Add new student details
- ✏️ Edit existing student records
- 🗑️ Delete student records
- ✅ Form validation before saving data
- 🔗 REST API connection between frontend and backend
- 🗄️ Real database storage using SQL Server

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| 🎨 Frontend | HTML, CSS, JavaScript |
| ⚙️ Backend | ASP.NET Core 8 Web API |
| 🗄️ Database | SQL Server |
| 🔁 API | REST API |
| 📦 ORM | Entity Framework Core |

---

## 📁 Project Structure

```text
StudentManager/
│
├── frontend/
│   ├── index.html
│   ├── add.html
│   ├── app.js
│   └── style.css
│
└── backend/
    └── StudentApi/
        ├── Controllers/
        │   └── StudentsController.cs
        ├── Data/
        │   └── AppDbContext.cs
        ├── Models/
        │   └── Student.cs
        ├── Program.cs
        ├── appsettings.json
        └── StudentApi.csproj
```

---

## 🖼️ Screenshots

Add your screenshots inside a folder named `screenshots`.

```text
screenshots/
├── main-page.png
└── add-student.png
```

| Main Page | 
|---|
| <img width="1346" height="645" alt="image" src="https://github.com/user-attachments/assets/51782f41-2328-4565-8c22-924a2548391e" /> |

|Add / Edit Student |
|---|
| <img width="1334" height="637" alt="image" src="https://github.com/user-attachments/assets/37062067-f636-4ad4-90f8-ac82855c53d6" /> |

| DataBase | 
|---|
| <img width="1118" height="325" alt="image" src="https://github.com/user-attachments/assets/d299ac1c-de36-4206-9c50-064b0fe77381" /> |


---

## 🗄️ Database Details

Database name:

```text
StudentDB
```

Main table:

```text
Students
```

| Column | Data Type |
|---|---|
| Id | int |
| Name | string |
| Email | string |
| Course | string |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get student by ID |
| POST | `/api/students` | Add new student |
| PUT | `/api/students/{id}` | Update student |
| DELETE | `/api/students/{id}` | Delete student |

---

## 🚀 How to Run the Project

### 1. Install Requirements

Make sure these are installed on your system:

- .NET 8 SDK
- SQL Server
- SQL Server Management Studio
- Web browser

---

### 2. Create SQL Server Database

Open SQL Server Management Studio and run:

```sql
CREATE DATABASE StudentDB;
```

---

### 3. Update Connection String

Open:

```text
backend/StudentApi/appsettings.json
```

Check this connection string:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=StudentDB;Trusted_Connection=True;TrustServerCertificate=True"
}
```

If your SQL Server name is different, replace `localhost` with your server name.

Example:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=DESKTOP-NAME\\SQLEXPRESS;Database=StudentDB;Trusted_Connection=True;TrustServerCertificate=True"
}
```

---

### 4. Run Database Migration

Open terminal inside:

```text
backend/StudentApi
```

Run these commands:

```bash
dotnet tool install --global dotnet-ef
dotnet ef migrations add InitialCreate
dotnet ef database update
```

---

### 5. Start Backend API

Run:

```bash
dotnet run
```

The backend API will start at:

```text
http://localhost:5000
```

Keep this terminal open.

---

### 6. Open Frontend

Open this file in your browser:

```text
frontend/index.html
```

Now the application is ready to use.

---

## ⚙️ API URL Configuration

The frontend connects to the backend API from:

```text
frontend/app.js
```

```javascript
const API_URL = "http://localhost:5000/api/students";
```

If your backend runs on another port, update the URL in this file.

---

## ✅ Testing the Application

You can test the project by following these steps:

1. Open the main page.
2. Click **Add Student**.
3. Enter student name, email, and course.
4. Save the record.
5. Check that the record appears in the table.
6. Edit the record.
7. Delete the record.

---

## 📚 Assignment Requirements Covered

| Requirement | Status |
|---|---|
| Frontend using HTML, CSS, JavaScript | ✅ Completed |
| ASP.NET Core backend | ✅ Completed |
| SQL Server database | ✅ Completed |
| REST API connection | ✅ Completed |
| GET data | ✅ Completed |
| POST data | ✅ Completed |
| PUT data | ✅ Completed |
| DELETE data | ✅ Completed |
| Form validation | ✅ Completed |

---

## 👨‍💻 Author

**Huda Tariq**  
**Roll Number: 2502125**

Web Technologies Database Connectivity Assignment

---

<div align="center">

### ⭐ Project Completed Successfully

</div>
