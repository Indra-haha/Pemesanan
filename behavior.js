menuSapi = document.getElementById('menu-sapi');
inputSapi = document.getElementById('pil-sapi');
menuAyam = document.getElementById('menu-ayam');
inputAyam = document.getElementById('pil-ayam');
menuVegetarian = document.getElementById('menu-vegetarian');
inputVegetarian = document.getElementById('pil-vegetarian');
menuKeju = document.getElementById('menu-keju');
topKeju = document.getElementById('top-keju');
menuSelada = document.getElementById('menu-selada');
topSelada = document.getElementById('top-selada');
menuTomat = document.getElementById('menu-tomat');
topTomat = document.getElementById('top-tomat');
menuBawang = document.getElementById('menu-bawang');
topBawang = document.getElementById('top-bawang');
menuJalapeno = document.getElementById('menu-jalapeno');
topJalapeno = document.getElementById('top-jalapeno');
menuMayo = document.getElementById('menu-mayonaise');
sausMayo = document.getElementById('saus-mayo');
menuBbq = document.getElementById('menu-bbq');
sausBbq = document.getElementById('saus-bbq');
menuMustard = document.getElementById('menu-mustard');
sausMustard = document.getElementById('saus-mustard');
menuPatty1 = document.getElementById('patty-regular');
patty1 = document.getElementById('size1');
menuPatty2 = document.getElementById('patty-double');
patty2 = document.getElementById('size2');
menuTeh = document.getElementById('menu-tea');
sideTeh = document.getElementById('side-tea');
menuOnions = document.getElementById('menu-onion-rings');
sideOnions = document.getElementById('side-onion-rings');
menuFrench = document.getElementById('menu-french-fries');
sideFrench = document.getElementById('side-french-fries')

// default
if (inputSapi.checked == true) {
    menuSapi.classList.add('box');
}
inputSapi.addEventListener('change', function() {
    if (inputSapi.checked) {
        menuSapi.classList.add('box');
    } else {
        menuSapi.classList.remove('box');
    }
});
inputAyam.addEventListener('change', function() {
    if (inputAyam.checked) {
        menuAyam.classList.add('box');
    } else {
        menuAyam.classList.remove('box');
    }
});
inputVegetarian.addEventListener('change', function() {
    if (inputVegetarian.checked) {
        menuVegetarian.classList.add('box');
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
topTomat.addEventListener('change', function() {
    if (topTomat.checked) {
        menuTomat.classList.add('box');
    } else {
        menuTomat.classList.remove('box');
    }
});
topBawang.addEventListener('change', function() {
    if (topBawang.checked) {
        menuBawang.classList.add('box');
    } else {
        menuBawang.classList.remove('box');
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

menuPatty1.addEventListener('click', function() {
    patty1.checked = !patty1.checked;
    if (patty1.checked) {
        patty2.checked = false;
        console.log('berhasil');
    } else {
        console.log('berhasil juga');
    }
});
menuPatty2.addEventListener('click', function() {
    patty2.checked = !patty2.checked;
    if (patty2.checked) {
        patty1.checked = false;
        console.log('berhasil');
    } else {
        console.log('berhasil juga');
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