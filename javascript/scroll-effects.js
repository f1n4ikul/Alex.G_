// const block1 = document.querySelector('.hard-skills-container');
// const tl = gsap.timeline({defaults : { duration: .3}});

// console.log(tl)
// tl.fromTo(block1, {x:  -50, opacity: 0}, {
//     opacity: 1,
//     x: 0,
//     scrollTrigger: {
//         trigger : '.philosophy-values-img-container',
//         start: 'top 120px',
//         end: 'center 120px',
//         scrub: true
        
//     }
// });

gsap.registerPlugin(ScrollToPlugin);

const menuItems = document.querySelectorAll(".menu__link");

menuItems.forEach((menuItem, idx) => {
    menuItem.addEventListener("click", ()=> {
        gsap.to(window, {
            duration: 1,
            scrollTo: {y: "#section-" + (idx + 1), autoKill: true},
        });
    });
});







document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.skill');
 
    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
 
        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;
 
            if (blockPosition < windowHeight - 200) {
                // block.style.opacity = "1";
                // block.style.transform = "translateY(0)";
                block.classList.add('fixed_skill');
            } else {
                // block.style.opacity = "0";
                // block.style.transform = "translateX(-50)";
                block.classList.remove('fixed_skill');
            }
        });
    }
 
    checkBlocksVisibility();
 
    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});



