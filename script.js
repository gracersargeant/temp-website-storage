/* ==================================================
   CURRENT DATE
================================================== */
const currentDate = document.getElementById("current-date");
const today = new Date ();
const dateOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
};
currentDate.textContent = today.toLocaleDateString("en-AU",dateOptions);
/*------------*/
const widthTest = document.getElementById("width-test");
widthTest.textContent = 'Viewport: ${window.innerWidth}px';
window.addEventListener("resize",()=>{
   widthTest.textContent = 'Viewport:${window.innerWidth}px';
});
