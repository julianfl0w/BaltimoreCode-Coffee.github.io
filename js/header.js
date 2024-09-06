document.addEventListener("DOMContentLoaded", function () {

    function handleMobileMenuClick(){
        const mainNav = document.querySelector('.main-nav')
        if(!mainNav.classList.contains('mobile-open')){
            mainNav.classList.add('mobile-open')
            mainNav.classList.remove('mobile-closed')
        }else{
            mainNav.classList.add('mobile-closed')
            mainNav.classList.remove('mobile-open')
        }
    }

    function init(){
        document.querySelector('.mobile-nav-bars').addEventListener('click', function(){
            handleMobileMenuClick()
        })
    }
    
    init()
});