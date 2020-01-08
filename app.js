const contact = document.querySelector(".contact");

class Input {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
}

class UI {
  showAlert(msg, className) {
    console.log(msg, className);
    // Create div element
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    // Get contact and label
    const contact = document.querySelector(".contact");
    const label = document.querySelector("label[for=name]");
    // Insert div
    contact.insertBefore(div, label);
    // Timeout
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}
// Event listener
contact.addEventListener("submit", validate);

// Validation
function validate(e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const ui = new UI();

  if (name.length == 0 || email.length == 0 || message.length < 0) {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Show success
    ui.showAlert("Message sent", "success");
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
}
