const sections = document.querySelectorAll('section[id]')

function navHighlighter() {
  let scrollY = window.scrollY
  console.log(sections)

  sections.forEach(current => {
    const currentSection = (current)
    const sectionHeight = currentSection.offsetHeight
    const sectionTop = currentSection.offsetTop - 600
    const sectionId = current.getAttribute('id')

    //compare
    if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
      (document.querySelector(`.nav-link[href*="${sectionId}"]`)).classList.add('current')
    } else {
      (document.querySelector(`.nav-link[href*="${sectionId}"]`)).classList.remove('current')
    }
  })
}

window.addEventListener('scroll', navHighlighter)
