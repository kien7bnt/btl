// Menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
// Begin Hire_me
function showRegistrationForm() {
  // Hiển thị form đăng ký khi nút "Hire Me" được click
  document.getElementById("registration-form").style.display = "block";
}

function submitRegistration() {
  // Xử lý đăng ký ở đây (có thể gửi dữ liệu đăng ký qua Ajax, hoặc thực hiện các bước khác)
  alert("Đăng ký thành công!");
}

// Iframe
const iFrameBox = document.getElementById('iframe');
  const loginBox = document.querySelector(".login-box");
  const openIframeButton = document.getElementById('openIframeButton');
  const closeIframeButton = document.getElementById('closeIframeButton');

  const showIframe = () => {
    iFrameBox.style.display = "block";
    loginBox.style.display = "block";
  };

  const closeIframe = () => {
    iFrameBox.style.display = "none";
    loginBox.style.display = "none";
  };

  openIframeButton.addEventListener("click", showIframe);
  closeIframeButton.addEventListener("click", closeIframe);