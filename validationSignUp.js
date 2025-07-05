function togglePassword(id, iconId) {
    const input = document.getElementById(id);
    const icon = document.getElementById(iconId);
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
    } else {
      input.type = "password";
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
    }
}

function validasiSignup(form) {
    if (form.user.value.trim() === "") {
      alert("Anda belum mengisikan Username!");
      form.user.focus();
      return false;
    }
    if (form.email.value.trim() === "") {
      alert("Anda belum mengisikan Email!");
      form.email.focus();
      return false;
    }
    if (form.pass.value.trim() === "") {
      alert("Anda belum mengisikan Password!");
      form.pass.focus();
      return false;
    }
    if (form.retype_pass.value.trim() === "") {
      alert("Anda belum menuliskan kembali Password!");
      form.retype_pass.focus();
      return false;
    }
    if (form.pass.value !== form.retype_pass.value) {
      alert("Password yang Anda isikan tidak cocok!");
      form.retype_pass.focus();
      return false;
    }
    if (form.date.value === "") {
      alert("Anda belum mengisikan Tanggal Lahir!");
      form.date.focus();
      return false;
    }
    alert("Register berhasil! Silahkan masuk kembali");
    window.location.href = "login.html";
    return false; 
}