/*       SHOW MENU ====================*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
        })
    }

}
showMenu('nav-toggle','nav-menu')

/*      REMOVE MENU MOBILE ===================*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*     SCROLL SECTIONS ACTIVE LINK +++++++++++++ */
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY =  window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrolly > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active-link')
        }
        
    })

}
window.addEventListener('scroll',scrollActive)


/* +++++== Change background header ===========*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >=200) header.classList.add('scroll-header'); else  header.classList.remove('scroll-header')
    }
window.addEventListener('scroll', scrollHeader)

/* +++++== Show Scroll top ===========*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >=560) scrollTop.classList.add('show-scroll'); else  scrollTop.classList.remove('show-scroll')
    }
window.addEventListener('scroll', scrollTop)



/* ============= Mixitup Filter Portfolio =============*/
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation:{
        duration: 400
    }
});

/* ==========LINK ACTIVE PORTFOLIO ==============*/
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }

}
linkPortfolio.forEach(l => l.addEventListener('click',activePortfolio))

/* ================== sWIPER  carousel +++++++++++++*/
const mySwiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
})


/* ==============  GSAP ANIMATION ++++++++*/