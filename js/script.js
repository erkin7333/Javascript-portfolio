window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    const menuBtn = this.document.querySelector('.menu-btn')
    const navigation = this.document.querySelector('.navigation')
    const navigationItems = this.document.querySelectorAll('.navigation a')

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })
    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })
});
