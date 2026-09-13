const dateElement = document.getElementById("current-date");
const today = new Date ();
const dateOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};
dateElement.textContent = today.toLocaleDateString(
  "en-AU",
  dateOptions
);