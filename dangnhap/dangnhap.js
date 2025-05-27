function togglePassword(id) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
  // Hiệu ứng: Hiện thông báo khi đã copy code tri thức (ví dụ)
  input.classList.add("input-animated");
  setTimeout(() => {
    input.classList.remove("input-animated");
  }, 500);
}

document
  .querySelector(".register-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    // Lấy giá trị 2 mật khẩu
    const password = document.getElementById("password")?.value;
    const repassword = document.getElementById("repassword")?.value;
    if (password !== repassword) {
      alert("Nhập mật khẩu không trùng khớp!");
      return;
    }
    // Sau khi thành công:
    alert("Đăng ký thành công!");
    window.location.href = "/trangchu/trangchu.html"; // Đường dẫn về trang chủ
  });
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
  input.classList.add("input-animated");
  setTimeout(() => {
    input.classList.remove("input-animated");
  }, 500);
}

document
  .querySelector(".register-form")
  ?.addEventListener("submit", function (e) {
    const password = document.getElementById("password")?.value;
    const repassword = document.getElementById("repassword")?.value;
    if (password !== repassword) {
      alert("Nhập mật khẩu không trùng khớp!");
      e.preventDefault(); // Ngăn gửi form nếu mật khẩu không khớp
      return false;
    }
    // Nếu hợp lệ, form sẽ gửi về PHP xử lý
  });
