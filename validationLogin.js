const checkbox = document.getElementById('rememberMe');
const label = document.getElementById('rememberLabel');
  
checkbox.addEventListener('change', function () {
      if (this.checked) {
        label.classList.add('text-success');
      } else {
        label.classList.remove('text-success');
      }
});

function validasiLogin(form) {
    if (form.email.value.trim() === "") {
      alert("Email belum diisi!");
      form.email.focus();
      return false;
    }
    if (form.pass.value.trim() === "") {
      alert("Kata sandi belum diisi!");
      form.pass.focus();
      return false;
    }
    alert("Login berhasil!");
    window.location.href = "home.html";
    return false; 
  }

function forgotPassword() {
    alert("Silakan cek email terdaftar untuk mereset kata sandi.");
}

function togglePassword() {
    const passField = document.getElementById("passwordField");
    const icon = document.getElementById("toggleIcon");
    if (passField.type === "password") {
      passField.type = "text";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
    } else {
      passField.type = "password";
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
    }
}

  