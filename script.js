function generate() {
  var url = document.getElementById("user-input");
  img_src =
    "http://api.qrserver.com/v1/create-qr-code/?data=" +
    url.value +
    "&size=300x300";
  var generated_qcode = document.getElementById("generated-qrcode");
  var ui_text = document.getElementById("ui-text");
  generated_qcode.src = img_src;
  generated_qcode.style.visibility = "visible";
  ui_text.innerHTML = url.value;

}
