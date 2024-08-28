let toasBox = document.getElementById("toastBox");
let successMsg =
  '<i class="fa-solid fa-circle-check"style="color:green;margin:0 20px;font-size:35px"></i> Successfully submitted';
let errorMsg =
  '<i class="fa-solid fa-circle-xmark" style="color:red;font-size:35px;margin:0 20px"></i>Please fix the error!';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation" style="color:orange;margin:0 20px;font-size:35px"></i>invalid input, check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
