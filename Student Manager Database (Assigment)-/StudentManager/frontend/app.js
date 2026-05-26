const API_URL = "http://localhost:5000/api/students";

async function loadStudents() {
  const tbody = document.getElementById("tableBody");
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Server error: " + res.status);
    const students = await res.json();

    if (students.length === 0) {
      tbody.innerHTML = "<tr class='state-row'><td colspan='5'>No students found. Add one to get started.</td></tr>";
      return;
    }

    tbody.innerHTML = "";
    students.forEach((s, i) => {
      const row = document.createElement("tr");
      row.style.animationDelay = `${i * 40}ms`;
      row.innerHTML = `
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.email}</td>
        <td><span class="course-badge">${s.course}</span></td>
        <td>
          <a href="add.html?id=${s.id}" class="btn small secondary">Edit</a>
          <button onclick="deleteStudent(${s.id})" class="btn small danger">Delete</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  } catch (err) {
    console.error("Load error:", err);
    tbody.innerHTML = `<tr class='state-row'><td colspan='5'>⚠ Could not connect to server. Make sure <code>dotnet run</code> is running on port 5000.</td></tr>`;
  }
}

async function deleteStudent(id) {
  if (!confirm("Are you sure you want to delete this student?")) return;
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Delete failed");
    showMessage("Student deleted successfully.", "success");
    loadStudents();
  } catch (err) {
    showMessage("Delete failed. Please try again.", "error");
  }
}

function showMessage(msg, type) {
  const el = document.getElementById("message");
  if (!el) return;
  const icon = type === "success"
    ? `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M3 8l4 4 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    : `<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2"/><path d="M8 5v3M8 11v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
  el.innerHTML = `<div class="message ${type}">${icon}<span>${msg}</span></div>`;
  setTimeout(() => { el.innerHTML = ""; }, 4000);
}
