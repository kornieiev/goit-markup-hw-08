(() => {
    const refs = {
      openMenuBtn: document.querySelector('.mob-menu-open'),
      closeMenuBtn: document.querySelector('.mob-menu-close'),
      menu: document.querySelector('.mob-menu'),
      body: document.querySelector('body'),
      menuList: document.querySelector('.team__title'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.menuList.addEventListener('click', removeMenu);
  
    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        refs.body.classList.toggle('no-scroll');
        refs.body.classList.toggle('no-scroll');
    }
    function removeMenu() {
        refs.menu.classList.add('is-hidden');
    }
  })();
  