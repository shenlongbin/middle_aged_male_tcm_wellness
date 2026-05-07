const form = document.getElementById("waitlist-form");
const statusText = document.getElementById("form-status");

if (form && statusText) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const contact = String(formData.get("contact") || "").trim();
    const concern = String(formData.get("concern") || "").trim();

    if (!contact) {
      statusText.textContent = "请先填写邮箱或微信号。";
      return;
    }

    statusText.textContent =
      "已记录演示提交：后续可接入表单服务，用于收集“" + concern + "”方向的用户兴趣。";

    form.reset();
  });
}
