function togglePassword(id) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
  input.classList.add("input-animated");
  setTimeout(() => {
    input.classList.remove("input-animated");
  }, 500);
}
