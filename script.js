'use strict'

const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header') 
const overLay = document.querySelector('.overlay')

btnHamburger.addEventListener('click', function(){

    //function will add the open class once the hamburger menu, and remove it when its clicked again 
    if(header.classList.contains('open')){
        header.classList.remove('open');
        overLay.classList.add('fadeout');
    }                                                                                       
    else {
        header.classList.add('open')
        overLay.classList.remove('fadeout');
    }
})
