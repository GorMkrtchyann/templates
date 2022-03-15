let classicBut = document.querySelector('#classicBut');
let onlineshopBut = document.querySelector('#onlineshopBut');
let porfolioBut = document.querySelector('#porfolioBut');
let musicBut = document.querySelector('#musicBut');
let criptoBut = document.querySelector('#criptoBut');

let classic = document.querySelectorAll('.classic')
let onlineshop = document.querySelectorAll('.onlineshop'); 
let cripto = document.querySelectorAll('.cripto');

classicBut.addEventListener("click", function(){
    classicBut.classList.toggle('temp-active');
    for (let elem of onlineshop) {
        if (classicBut.classList.item('.temp-active')) {
            elem.style.display = 'none';
        }else{
            elem.style.display = 'block';
        }
      }
      for (let elem of cripto) {
        if (classicBut.classList.item('.temp-active')) {
            elem.style.display = 'none';
        }else{
            elem.style.display = 'block';
        }
      }
});

onlineshopBut.addEventListener("click", function(){
    onlineshopBut.classList.toggle('temp-active');
    for (let elem of classic) {
        if (onlineshopBut.classList.item('.temp-active')) {
            elem.style.display = 'none';
        }else{
            elem.style.display = 'block';
        }
      }
      for (let elem of cripto) {
        if (onlineshopBut.classList.item('.temp-active')) {
            elem.style.display = 'none';
        }else{
            elem.style.display = 'block';
        }
      }
});

// criptoBut.addEventListener("click", function(){
//     criptoBut.classList.toggle('temp-active');
//     for (let elem of classic) {
//         if (criptoBut.classList.item('.temp-active')) {
//             elem.style.display = 'none';
//         }else{
//         }
//       }
//       for (let elem of onlineshop) {
//         if (criptoBut.classList.item('.temp-active')) {
//             elem.style.display = 'none';
//         }else{
//         }
//       }
// });


let eduBut = document.querySelector('#edu');
let eduPage = document.querySelector('.edu');
let clossBut = document.querySelectorAll('.closs-icon')

for (elem of clossBut) {
    eduBut.addEventListener("click", function(){
        eduPage.style.display = 'block'
    });
    
    elem.addEventListener("click", function(){
        eduPage.style.display = 'none'
    });
    
    document.querySelector('#Hexashop').addEventListener("click", function(){
        document.querySelector('.Hexashop').style.display = 'block'
    });
    elem.addEventListener("click", function(){
        document.querySelector('.Hexashop').style.display = 'none'
    });


    document.querySelector('#Chain').addEventListener("click", function(){
        document.querySelector('.Chain').style.display = 'block'
    });
    elem.addEventListener("click", function(){
        document.querySelector('.Chain').style.display = 'none'
    });


    document.querySelector('#Zay').addEventListener("click", function(){
        document.querySelector('.Zay').style.display = 'block'
    });
    elem.addEventListener("click", function(){
        document.querySelector('.Zay').style.display = 'none'
    });


    document.querySelector('#Kool').addEventListener("click", function(){
        document.querySelector('.Kool').style.display = 'block'
    });
    elem.addEventListener("click", function(){
        document.querySelector('.Kool').style.display = 'none'
    });


    document.querySelector('#Pop').addEventListener("click", function(){
        document.querySelector('.Pop').style.display = 'block'
    });
    elem.addEventListener("click", function(){
        document.querySelector('.Pop').style.display = 'none'
    });
}

let menuStiky = document.querySelector('.Fixedmenu');
let menu = document.querySelector('.menu')

window.onscroll = function(){
    if (window.pageYOffset >= menu.offsetTop) {
        menuStiky.classList.add('sticky')
    }else{
        menuStiky.classList.remove('sticky')
    }
}

let mobileMenuBut = document.querySelector('#mob-menu-but');
let mobileMenu = document.querySelector('#mob-menu')
let mobileCloss = document.querySelector('#menu-closs')

mobileMenuBut.addEventListener("click", function(){
    mobileMenu.classList.toggle('but-active')
});
mobileCloss.addEventListener("click", function(){
    mobileMenu.classList.remove('but-active')
});
window.addEventListener("scroll", function(){
    mobileMenu.classList.remove('but-active')
});