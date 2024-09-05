document.addEventListener("DOMContentLoaded", function () {

    function handleMobileMenuClick(){
        const mainNav = document.querySelector('.main-nav')
        if(!mainNav.classList.contains('mobile-open')){
            mainNav.classList.add('mobile-open')
        }else{
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