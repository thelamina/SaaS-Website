// NAV
function navSlide(){
  
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', navbutton);

  function navbutton(){
    nav.classList.toggle('nav-active');
    
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation ='';
      }
      else{
        link.style.animation = `navLinkFade .5s ease-in-out forwards ${index / 7+.4}s`
      }
    });

    // Animate Burger

    burger.classList.toggle('toggle');
  };

};

navSlide();