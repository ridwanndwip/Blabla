const NavToggle = document.querySelector('.navbar_toggle input');
const navbar = document.querySelector('nav ul');
const newli = document.createElement('li');
const newa = document.createElement('a');
const texta = document.createTextNode('LOGIN');

if (matchMedia) {
    const mq = window.matchMedia("(min-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

function WidthChange(mq) {
    if (mq.matches) {
        navbar.removeChild(newli);
    } else {
        newa.setAttribute('href','#');
        newli.appendChild(newa);
        newa.appendChild(texta);
        navbar.appendChild(newli);
    }
}

NavToggle.addEventListener('click', function(){
    navbar.classList.toggle('seret');
    document.body.classList.toggle("stop-scrolling"); 
   });