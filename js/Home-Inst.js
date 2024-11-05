document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.getElementById("arrow")
  const menu = document.getElementById("menu")
  let menuVisible = false

  arrow.addEventListener("click", function () {
    menu.style.left = menuVisible ? "-250px" : "0"
    menuVisible = !menuVisible
  })

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !arrow.contains(event.target)) {
      menu.style.left = "-250px"
      menuVisible = false
    }
  })
})
