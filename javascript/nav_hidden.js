const hideNav = () => {
    const hiddenNavClassName = 'navigation__hidden';
    const fixedNavClassName = 'navigation__fixed';
    const headerHeight = 70;
    const navHeight = 82;
    let initialYvalue = window.scrollY;
    let body = document.querySelector('body');

    let isItHidden = false;
    let isItFixed = false;

    window.addEventListener('scroll', (ev) => {
        const scrollY = window.scrollY;
        if (scrollY > headerHeight) {
            makeItFixed();

            if (scrollY > headerHeight + navHeight && scrollY > initialYvalue) {
                hide();
            } else {
                show();
            }
        } else {
            makeItNotFixed();
        }

        initialYvalue = scrollY;
    });

    function hide() {
        if (!isItHidden) {
            body.classList.add(hiddenNavClassName);
            isItHidden = true;
        }
    }

    function show() {
        if (isItHidden) {
            body.classList.remove(hiddenNavClassName);
            isItHidden = false;
        }
    }

    function makeItFixed() {
        if (!isItFixed) {
            body.classList.add(fixedNavClassName);
            isItFixed = true;
        }
    }

    function makeItNotFixed() {
        if (isItFixed) {
            body.classList.remove(fixedNavClassName);
            isItFixed = false;
        }
    }
}

hideNav()