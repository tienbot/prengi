const currentYear = new Date().getFullYear();
const yearElements = document.getElementsByClassName('current-year');
for (let i = 0; i < yearElements.length; i++) {
  yearElements[i].textContent = currentYear;
}