function setCookie() {
  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;
  const days = 7; // Cookie will expire in 7 days

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();

  document.cookie = `${name}=${value}; ${expires}; path=/`;
  document.getElementById(
    "output"
  ).textContent = `Cookie set: ${name}=${value}`;
}

function getCookie() {
  const name = document.getElementById("cookieName").value + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) == 0) {
      document.getElementById(
        "output"
      ).textContent = `Cookie value: ${cookie.substring(
        name.length,
        cookie.length
      )}`;
      return;
    }
  }
  document.getElementById("output").textContent = `Cookie not found`;
}

function deleteCookie() {
  const name = document.getElementById("cookieName").value;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.getElementById("output").textContent = `Cookie deleted: ${name}`;
}
