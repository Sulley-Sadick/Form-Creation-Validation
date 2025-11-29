window.addEventListener("DOMContentLoaded", function () {
  // selecting elements
  const form = this.document.getElementById("registration-form");
  const feedbackDiv = this.document.getElementById("form-feedback");

  // add submit event to the form element
  form.addEventListener("submit", function (event) {
    // prevent default submission of form
    event.preventDefault();

    // select values for each input fields
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // initializing validation variables
    let isValid = true;

    // array to hold error messages
    const messages = [];

    // username.length < 3
    if (username.length < 3) {
      // set isValid = false
      isValid = false;

      // push error message to messages array
      messages.push("username should be atleast more than 3 characters.");
    }

    // email does not contain @
    if (!email.includes("@") && !email.includes(".")) {
      // set isValid = false

      isValid = false;

      // push error message to messages array
      messages.push("email should contain @ sign.");
    }

    // password.length <= 8
    if (password.length <= 8) {
      // set isValid = false
      isValid = false;

      // push error message to messages array
      messages.push("password should be atleast more than 8 characters.");
    }

    // set feebackDiv  display = block
    feedbackDiv.style.display = "block";

    // isValid === true
    if (isValid === true)
      // set the textContent of feedbackDiv = Registration successful!
      feedbackDiv.textContent = "Registration successful!";

    // set feedbackDiv color = #28a745
    feedbackDiv.style.color = "#28a745";

    if (isValid === false) {
      // join the messages array by using the join method with <br /> to create a single string and set to innerHTML of feedbackDiv
      feedbackDiv.innerHTML = messages.join("<br />");

      // set feedbackDiv color = #dc3545
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
