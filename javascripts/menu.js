const headerMenu = document.querySelector('.header-menu')
const headerHolder = document.querySelector('.header-holder')

headerMenu.addEventListener('click', ()=>{
    headerHolder.classList.toggle('active')
    headerMenu.innerHTML = headerHolder.classList.contains('active')
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>'
})

