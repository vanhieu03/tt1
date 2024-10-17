const headerMenu = document.querySelector('.header-menu');
const headerHolderWrapper = document.querySelector('.header-holder-wrapper');
const hoverUnderline = document.querySelectorAll('.hover_underline');
const headerHolder = document.querySelector('.header-holder');
//menu mobile
const closeMenu = ()=>{
    headerHolderWrapper.classList.toggle('active');
    headerMenu.innerHTML = headerHolderWrapper.classList.contains('active')
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
};

headerMenu.addEventListener('click', closeMenu);
headerHolderWrapper.addEventListener('click', closeMenu);
headerHolder.addEventListener('click', e=>{
    e.stopPropagation();
})

hoverUnderline.forEach(element=>{
    element.addEventListener('click', ()=>{
        hoverUnderline.forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    });
});

// headerUnderline
window.addEventListener('scroll', () =>{
    const sections = document.querySelectorAll('div[id]');
    let currentSection = '';
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        if(scrollY >= sectionTop - 100){
            currentSection = section.getAttribute('id');
        }
        const links = document.querySelectorAll('a');
        links.forEach(link =>{
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${currentSection}`){
                link.classList.add('active');
            };
        });
    });
});

// Logo scrollToTop
const headerLogoMb = document.querySelector('.header-logo');
const headerLogoPc = document.querySelector('.container-right-logo');
const scrollToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
headerLogoMb.addEventListener('click', scrollToTop);
headerLogoPc.addEventListener('click', scrollToTop);