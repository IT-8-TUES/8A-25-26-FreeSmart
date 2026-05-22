// theme-toggle aka tt
let darkmode = localStorage.getItem('darkmode');

const darkmodeToggle = document.getElementById('theme-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    document.querySelector('header').classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    document.querySelector('header').classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if (darkmode === 'active') {
    enableDarkMode();
}

  darkmodeToggle.addEventListener("click", () => {
        console.log('Button was clicked!');
        darkmode = localStorage.getItem('darkmode');
        if (darkmode !== 'active') {
            enableDarkMode();
        }
        else {       
            disableDarkMode();
        }
    })

