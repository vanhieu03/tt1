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


window.addEventListener('scroll', () =>{
    const sections = document.querySelectorAll('div[id]');
    let currentSection = ''
    sections.forEach(section =>{
        const sectionTop = section.offsetTop
        
        if(scrollY >= sectionTop){
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
