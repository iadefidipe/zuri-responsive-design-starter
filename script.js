'use strict'

const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header') 
const overLay = document.querySelector('.overlay')
const hamburger = document.querySelector('.btnHamburger')

btnHamburger.addEventListener('click', function(){

    //function will add the open class once the hamburger menu, and remove it when its clicked again 
    if(header.classList.contains('open')){
        header.classList.remove('open');
        overLay.classList.remove('hide-display');
        hamburger.classList.remove("btnHamburger-animate");

    }                                                                                       
    else {
        header.classList.add('open')
        overLay.classList.add('hide-display');
        hamburger.classList.add('btnHamburger-animate')
    }
})
