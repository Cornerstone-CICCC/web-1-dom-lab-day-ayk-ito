const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const hireDate = formData.get("hire_date");
  const photo = formData.get("photo");
  console.log(firstname, lastname, email, hireDate, photo);

  const tableBody = document.querySelector("tbody");
  const newRow = document.createElement("tr");

  // Photo cell
  const photoCell = document.createElement("td");
  const img = document.createElement("img");
  img.src = URL.createObjectURL(photo);
  img.width = 50; // Set image width
  img.height = 50; // Set image height
  photoCell.append(img);
  newRow.append(photoCell);

  // First Name cell
  const firstnameCell = document.createElement("td");
  firstnameCell.textContent = firstname;
  newRow.appendChild(firstnameCell);

  // Last Name cell
  const lastnameCell = document.createElement("td");
  lastnameCell.textContent = lastname;
  newRow.appendChild(lastnameCell);

  // Email cell
  const emailCell = document.createElement("td");
  emailCell.textContent = email;
  newRow.appendChild(emailCell);

  // Hire Date cell
  const hireDateCell = document.createElement("td");
  hireDateCell.textContent = hireDate;
  newRow.appendChild(hireDateCell);

  // Action cell
  const actionCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this employee?") == true) {
      newRow.remove();
    }
  });
  actionCell.appendChild(deleteButton);
  newRow.appendChild(actionCell);

  tableBody.append(newRow);
  form.reset();
});

// afdsa@canada.ca
