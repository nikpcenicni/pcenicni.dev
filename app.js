const [red, green, blue] = [69, 111, 225]
const topnav = document.querySelector('.topnav')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  topnav.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNavResponse() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }