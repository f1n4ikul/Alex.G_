
const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active')
            menuBtn.classList.remove('active')
            body.classList.remove('lock')
        })
    })
}

const anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach(anchor => {
//     anchor.addEventListener('click', event => {
//         event.preventDefault();

//         const blockID = anchor.getAttribute('href').substring(1)

//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//         })
//     })
// })




document.addEventListener('DOMContentLoaded', ()=> {
    const heads = document.querySelectorAll('.scrollops')
    heads.forEach(head => {
        window.addEventListener('scroll', ()=>{
            let scrollTop = window.scrollY;
            let heroCenter = head.offsetHeight;
            // console.log(scrollTop);
            // console.log(heroCenter);
    
            if (scrollTop >= heroCenter){
                head.classList.add('fixed');
            } else {
                head.classList.remove('fixed');
            }      
        })
    })
})
//-------------------------------------------------------------------------//
// document.addEventListener('DOMContentLoaded', ()=> {
//     const heads = document.querySelectorAll('.skill')
//     heads.forEach(head => {
//         window.addEventListener('scroll', ()=>{
//             let scrollUp = window.scrollY;
//             let heroC = head.offsetHeight + 1500;
//             //  console.log(scrollUp);
//             //  console.log(heroC);
    
//             if (scrollUp >= heroC){
//                 head.classList.add('smooth-scrolling');
//             } else {
//                 head.classList.remove('smooth-scrolling');
//             }      
//         })
//     })
// })

document.addEventListener('DOMContentLoaded', ()=> {
    const heads = document.querySelector(`.hard-skills-container`)
    window.addEventListener('scroll', ()=>{
        let scrollUp = window.scrollY;
        let heroC = heads.offsetHeight;
            // console.log(scrollUp);
            // console.log(heroC);

        if (scrollUp >= heroC){
            heads.classList.add('smooth-scrolling');
        } else {
            heads.classList.remove('smooth-scrolling');
        }      
    })
})


document.addEventListener('DOMContentLoaded', ()=> {
    const heads = document.querySelectorAll('.main-img')
    heads.forEach(head => {
        window.addEventListener('scroll', ()=>{
            let scrollTop = window.scrollY;
            let heroCenter = head.offsetHeight - 100;
            // console.log(scrollTop);
            // console.log(heroCenter);
    
            if (scrollTop >= heroCenter){
                head.classList.add('animation-border');
            } else {
                head.classList.remove('animation-border');
            }
            
        })
    })
    

})





let progressBar = document.querySelector('.js-progress-line');

document.onscroll = function(){
    let progressLine = window.scrollY / (document.body.clientHeight - window.innerHeight) * 100;
    
    progressBar.style.width = progressLine + '%'

}


