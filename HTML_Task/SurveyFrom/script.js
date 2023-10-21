function submitForm() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelectorAll('input[name="gender"]:checked');
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (
    firstName &&
    lastName &&
    dob &&
    country &&
    gender.length > 0 &&
    profession &&
    email &&
    mobile
  ) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");

    popupContent.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${Array.from(
              gender,
              (g) => g.value
            ).join(", ")}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;

    popup.style.display = "block";
  } else {
    alert("Please fill out all required fields marked with *");
  }
}

function resetForm() {
  document.getElementById("survey-form").reset();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  resetForm();
}
