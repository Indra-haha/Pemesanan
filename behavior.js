const menuSapi = document.getElementById('menu-sapi');
const inputSapi = document.getElementById('pil-sapi');
const menuAyam = document.getElementById('menu-ayam');
const inputAyam = document.getElementById('pil-ayam');
const menuVegetarian = document.getElementById('menu-vegetarian');
const inputVegetarian = document.getElementById('pil-vegetarian');
const menuKeju = document.getElementById('menu-keju');
const topKeju = document.getElementById('top-keju');
const menuSelada = document.getElementById('menu-selada');
const topSelada = document.getElementById('top-selada');
const menuTelur = document.getElementById('menu-telur');
const topTelur = document.getElementById('top-telur');
const menuPatty = document.getElementById('menu-patty');
const topPatty = document.getElementById('top-patty');
const menuJalapeno = document.getElementById('menu-jalapeno');
const topJalapeno = document.getElementById('top-jalapeno');
const menuMayo = document.getElementById('menu-mayonaise');
const sausMayo = document.getElementById('saus-mayo');
const menuBbq = document.getElementById('menu-bbq');
const sausBbq = document.getElementById('saus-bbq');
const menuMustard = document.getElementById('menu-mustard');
const sausMustard = document.getElementById('saus-mustard');
const menuSambal = document.getElementById('menu-sambal');
const sausSambal = document.getElementById('saus-sambal');
const menuPatty1 = document.getElementById('patty-regular');
const patty1 = document.getElementById('size1');
const menuPatty2 = document.getElementById('patty-double');
const patty2 = document.getElementById('size2');
const menuTeh = document.getElementById('menu-tea');
const sideTeh = document.getElementById('side-tea');
const menuOnions = document.getElementById('menu-onion-rings');
const sideOnions = document.getElementById('side-onion-rings');
const menuFrench = document.getElementById('menu-french-fries');
const sideFrench = document.getElementById('side-french-fries')
const reset = document.getElementById('reset');

// default
if (inputSapi.checked == true) {
    menuSapi.classList.add('box');
}
inputSapi.addEventListener('change', function() {
    if (inputSapi.checked) {
        inputAyam.checked = false;
        inputVegetarian.checked = false;
        menuSapi.classList.add('box');
        menuAyam.classList.remove('box');
        menuVegetarian.classList.remove('box');
    } else {
        menuSapi.classList.remove('box');
    }
});
inputAyam.addEventListener('change', function() {
    if (inputAyam.checked) {
        inputSapi.checked = false;
        inputVegetarian.checked = false;
        menuAyam.classList.add('box');
        menuSapi.classList.remove('box');
        menuVegetarian.classList.remove('box');
    } else {
        menuAyam.classList.remove('box');
    }
});
inputVegetarian.addEventListener('change', function() {
    if (inputVegetarian.checked) {
        inputSapi.checked = false;
        inputAyam.checked = false;
        menuVegetarian.classList.add('box');
        menuAyam.classList.remove('box');
        menuSapi.classList.remove('box');
    } else {
        menuVegetarian.classList.remove('box');
    }
});

topKeju.addEventListener('change', function() {
    if (topKeju.checked) {
        menuKeju.classList.add('box');
    } else {
        menuKeju.classList.remove('box');
    }
});
topSelada.addEventListener('change', function() {
    if (topSelada.checked) {
        menuSelada.classList.add('box');
    } else {
        menuSelada.classList.remove('box');
    }
});
topTelur.addEventListener('change', function() {
    if (topTelur.checked) {
        menuTelur.classList.add('box');
    } else {
        menuTelur.classList.remove('box');
    }
});
topPatty.addEventListener('change', function() {
    if (topPatty.checked) {
        menuPatty.classList.add('box');
    } else {
        menuPatty.classList.remove('box');
    }
});
topJalapeno.addEventListener('change', function() {
    if (topJalapeno.checked) {
        menuJalapeno.classList.add('box');
    } else {
        menuJalapeno.classList.remove('box');
    }
});

var x = 0;
//default
if (sausMayo.checked) {
    menuMayo.classList.add('box')
}
menuMayo.addEventListener('click', function() {
    sausMayo.checked = !sausMayo.checked;
    if (sausMayo.checked) {
        menuMayo.classList.add('box');
    } else {
        menuMayo.classList.remove('box');
    }
});
menuBbq.addEventListener('click', function() {
    sausBbq.checked = !sausBbq.checked;
    if (sausBbq.checked) {
        menuBbq.classList.add('box');
    } else {
        menuBbq.classList.remove('box');
    }
});
menuMustard.addEventListener('click', function() {
    sausMustard.checked = !sausMustard.checked;
    if (sausMustard.checked) {
        menuMustard.classList.add('box');
    } else {
        menuMustard.classList.remove('box');
    }
});
menuSambal.addEventListener('click', function() {
    sausSambal.checked = !sausSambal.checked;
    if (sausSambal.checked) {
        menuSambal.classList.add('box');
    } else {
        menuSambal.classList.remove('box');
    }
});

menuPatty1.addEventListener('click', function() {
    patty1.checked = !patty1.checked;
    if (patty1.checked) {
        patty2.checked = false;
        menuPatty1.classList.add('box');
        menuPatty2.classList.remove('box');
    } else {
        menuPatty1.classList.remove('box');
    }
});
menuPatty2.addEventListener('click', function() {
    patty2.checked = !patty2.checked;
    if (patty2.checked) {
        patty1.checked = false;
        menuPatty2.classList.add('box');
        menuPatty1.classList.remove('box');
    } else {
        menuPatty2.classList.remove('box');
    }
});

sideTeh.addEventListener('change', function() {
    if (sideTeh.checked) {
        menuTeh.classList.add('box');
    } else {
        menuTeh.classList.remove('box');
    }
});
sideOnions.addEventListener('change', function() {
    if (sideOnions.checked) {
        menuOnions.classList.add('box');
    } else {
        menuOnions.classList.remove('box');
    }
});
sideFrench.addEventListener('change', function() {
    if (sideFrench.checked) {
        menuFrench.classList.add('box');
    } else {
        menuFrench.classList.remove('box');
    }
});

reset.addEventListener('click', function() {
    menuAyam.classList.remove('box');
    menuVegetarian.classList.remove('box');
    menuKeju.classList.remove('box');
    menuSelada.classList.remove('box');
    menuTelur.classList.remove('box');
    menuPatty.classList.remove('box');
    menuJalapeno.classList.remove('box');
    menuBbq.classList.remove('box');
    menuMustard.classList.remove('box');
    menuPatty1.classList.remove('box');
    menuPatty2.classList.remove('box');
    menuTeh.classList.remove('box');
    menuOnions.classList.remove('box');
    menuFrench.classList.remove('box');
});