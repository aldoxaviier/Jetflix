function validateForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    var dateOfBirth = document.getElementById("date").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var terms = document.getElementById("term");
  
    if (name === "" || password === "" || confirmPassword === "" || dateOfBirth === "" || !gender || !terms.checked) {
      alert("Please fill in all fields and accept the terms and conditions.");
      return false;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    return true;
  }