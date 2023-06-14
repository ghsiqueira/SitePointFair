function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookie-consent");

  if (!getCookie("cookie_consent")) {
    cookieConsent.style.display = "block";
  }

  const acceptCookiesBtn = document.getElementById("accept-cookies");
  acceptCookiesBtn.addEventListener("click", function () {
    setCookie("cookie_consent", "accepted", 30);
    cookieConsent.style.display = "none";
  });
});
