export function toast({
  title = "",
  message = "",
  type = "info",
  duration = 3000,
}) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div className="toast__icon">
                        <i className="${icon}"></i>
                    </div>
                    <div className="toast__body">
                        <h3 className="toast__title">${title}</h3>
                        <p className="toast__msg">${message}</p>
                    </div>
                    <div className="toast__close">
                        <i className="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);
  }
}

/* <div id="toast"></div>
<div>
  <div onClick={showSuccessToast} className="btn--message btn--success">
    Show success toast
  </div>
  <div onClick={showErrorToast} className="btn--message btn--danger">
    Show error toast
  </div>
</div> */

export function showErrorToast(title, message, type, duration = 5000) {
  toast({
    title,
    message,
    type,
    duration,
  });
}
export function showSuccessToast() {
  toast({
    title: "Thành công!",
    message: "Bạn đã đăng ký thành công tài khoản tại F8.",
    type: "success",
    duration: 5000,
  });
}
