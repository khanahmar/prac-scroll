const boxes = document.querySelectorAll(".box")
console.log(boxes)

window.addEventListener("scroll", checkBox)
function checkBox() {
  const triggerPoint = (window.innerHeight / 5) * 4
  boxes.forEach((box) => {
    if (box.getBoundingClientRect().top < triggerPoint) {
      box.classList.add("show")
    } else {
      box.classList.remove("show")
    }
  })
}
