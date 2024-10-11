const headerMenu = document.querySelector('.header-menu')
const headerHolder = document.querySelector('.header-holder')
const hoverUnderline = document.querySelectorAll('.hover_underline')

headerMenu.addEventListener('click', ()=>{
    headerHolder.classList.toggle('active')
    headerMenu.innerHTML = headerHolder.classList.contains('active')
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>'
})


hoverUnderline.forEach(element=>{
    element.addEventListener('click', ()=>{
        hoverUnderline.forEach(el => el.classList.remove('active'))
        element.classList.add('active')
    })
})
