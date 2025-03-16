function generate() {
  var url = document.getElementById("user-input");
  img_src =
    "http://api.qrserver.com/v1/create-qr-code/?data=" +
    url.value +
    "&size=300x300";
  var generated_qcode = document.getElementById("generated-qrcode");
  var ui_text = document.getElementById("ui-text");

  if (url.value.length == 0){ generated_qcode.style.visibility = "hidden";
    ui_text.innerHTML = "";
  }
  else {generated_qcode.style.visibility = "visible";

  generated_qcode.src = img_src;
  
  ui_text.innerHTML = url.value;}

}
