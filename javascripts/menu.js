const headerMenu = document.querySelector('.header-menu')
const headerHolder = document.querySelector('.header-holder')
const hoverUnderline = document.querySelectorAll('.hover_underline')
//menu mobile
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

// headerUnderline
window.addEventListener('scroll', () =>{
    const sections = document.querySelectorAll('div[id]');
    let currentSection = ''
    sections.forEach(section =>{
        const sectionTop = section.offsetTop
        
        if(scrollY >= sectionTop - 100){
            currentSection = section.getAttribute('id')
        }
        const links = document.querySelectorAll(`a`)
        links.forEach(link =>{
            link.classList.remove('active')
            if(link.getAttribute('href') === `#${currentSection}`){
                link.classList.add('active')
            }
        })
    })
})

// Logo scrollToTop
const headerLogoMb = document.querySelector('.header-logo')
const headerLogoPc = document.querySelector('.container-right-logo')
const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
headerLogoMb.addEventListener('click', scrollToTop)
headerLogoPc.addEventListener('click', scrollToTop)