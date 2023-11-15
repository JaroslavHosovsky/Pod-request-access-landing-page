const formDesktop = document.querySelector(".form-desktop");
const formMobile = document.querySelector(".form-mobile");
const desktopInput = document.getElementById("email1");
const mobileInput = document.getElementById("email2");
const mobileWarning = document.querySelector(".warning-mobile");
const tabletDesktopWarning = document.querySelector(".warning-tablet-desktop");

formDesktop.addEventListener("submit", (event) => {
  if (desktopInput.value === "") {
    event.preventDefault();
    tabletDesktopWarning.style.display = "flex";
  }
});

formMobile.addEventListener("submit", (event1) => {
  if (mobileInput.value === "") {
    event1.preventDefault();
    mobileWarning.style.display = "flex";
  }
});
