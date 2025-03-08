const sapi = document.getElementById('menu-sapi');
const pilSapi = document.getElementById('pil-sapi');
const ayam = document.getElementById('menu-ayam');
const pilAyam = document.getElementById('pil-ayam');
const vegetarian = document.getElementById('menu-vegetarian');
const pilVegetarian = document.getElementById('pil-vegetarian');
const keju = document.getElementById('menu-keju');
const topKeju = document.getElementById('top-keju');
const selada = document.getElementById('menu-selada');
const topSelada = document.getElementById('top-selada');
const tomat = document.getElementById('menu-tomat');
const topTomat = document.getElementById('top-tomat');
const bawang = document.getElementById('menu-bawang');
const topBawang = document.getElementById('top-bawang');
const jalapeno = document.getElementById('menu-jalapeno');
const topJalapeno = document.getElementById('top-jalapeno');
const teh = document.getElementById('menu-tea');
const sideTea = document.getElementById('side-tea');
const onion = document.getElementById('menu-onion-rings');
const sideOnion = document.getElementById('side-onion-rings');
const frenchFries = document.getElementById('menu-french-fries');
const sideFrenchFries = document.getElementById('side-french-fries');
const mayo = document.getElementById('menu-mayonaise');
const sausMayo = document.getElementById('saus-mayo');
const bbq = document.getElementById('menu-bbq');
const sausBbq = document.getElementById('saus-bbq');
const mustard = document.getElementById('menu-mustard');
const sausMustard = document.getElementById('saus-mustard');
const reset = document.getElementById('reset');

let x = 0;
let y = 0;
let z = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;
let i = 0;
let j = 0;
let k = 0;

pilSapi.addEventListener('click', function() {
    document.getElementById('menu-sapi').checked = true;
    sapi.classList.add('box');
    x++;
    if (x == 2) {
        document.getElementById('menu-sapi').checked = false;
        sapi.classList.remove('box');
        x = 0;
    }
});
pilAyam.addEventListener('click', function() {
    document.getElementById('menu-ayam').checked = true;
    ayam.classList.add('box');
    y++;
    if (y == 2) {
        document.getElementById('menu-ayam').checked = false;
        ayam.classList.remove('box');
        y = 0;
    }
});
pilVegetarian.addEventListener('click', function() {
    document.getElementById('menu-vegetarian').checked = true;
    vegetarian.classList.add('box');
    z++;
    if (z == 2) {
        document.getElementById('menu-vegetarian').checked = false;
        vegetarian.classList.remove('box');
        z = 0;
    }
});
topKeju.addEventListener('click', function() {
    document.getElementById('menu-keju').checked = true;
    keju.classList.add('box');
    a++;
    if (a == 2) {
        document.getElementById('menu-keju').checked = false;
        keju.classList.remove('box');
        a = 0;
    }
});
topSelada.addEventListener('click', function() {
    document.getElementById('menu-selada').checked = true;
    selada.classList.add('box');
    b++;
    if (b == 2) {
        document.getElementById('menu-selada').checked = false;
        selada.classList.remove('box');
        b = 0;
    }
});
topTomat.addEventListener('click', function() {
    document.getElementById('menu-tomat').checked = true;
    tomat.classList.add('box');
    c++;
    if (c == 2) {
        document.getElementById('menu-tomat').checked = false;
        tomat.classList.remove('box');
        c = 0;
    }
});
topBawang.addEventListener('click', function() {
    document.getElementById('menu-bawang').checked = true;
    bawang.classList.add('box');
    d++;
    if (d == 2) {
        document.getElementById('menu-bawang').checked = false;
        bawang.classList.remove('box');
        d = 0;
    }
});
topJalapeno.addEventListener('click', function() {
    document.getElementById('menu-jalapeno').checked = true;
    jalapeno.classList.add('box');
    e++;
    if (e == 2) {
        document.getElementById('menu-jalapeno').checked = false;
        jalapeno.classList.remove('box');
        e = 0;
    }
});
sideTea.addEventListener('click', function() {
    document.getElementById('menu-tea').checked = true;
    teh.classList.add('box');
    f++;
    if (f == 2) {
        document.getElementById('menu-tea').checked = false;
        teh.classList.remove('box');
        f = 0;
    }
});
sideOnion.addEventListener('click', function() {
    document.getElementById('menu-onion-rings').checked = true;
    onion.classList.add('box');
    g++;
    if (g == 2) {
        document.getElementById('menu-onion-rings').checked = false;
        onion.classList.remove('box');
        g = 0;
    }
});
sideFrenchFries.addEventListener('click', function() {
    document.getElementById('menu-french-fries').checked = true;
    frenchFries.classList.add('box');
    h++;
    if (h == 2) {
        document.getElementById('menu-french-fries').checked = false;
        frenchFries.classList.remove('box');
        h = 0;
    }
});
sausMayo.addEventListener('click', function() {
    document.getElementById('menu-mayonaise').checked = true;
    mayo.classList.add('box');
    i++;
    if (i == 2) {
        document.getElementById('menu-mayonaise').checked = false;
        mayo.classList.remove('box');
        i = 0;
    }
});
sausBbq.addEventListener('click', function() {
    document.getElementById('menu-bbq').checked = true;
    bbq.classList.add('box');
    j++;
    if (j == 2) {
        document.getElementById('menu-bbq').checked = false;
        bbq.classList.remove('box');
        j = 0;
    }
});
sausMustard.addEventListener('click', function() {
    document.getElementById('menu-mustard').checked = true;
    mustard.classList.add('box');
    k++;
    if (k == 2) {
        document.getElementById('menu-mustard').checked = false;
        mustard.classList.remove('box');
        k = 0;
    }
});

reset.addEventListener('click', function() {
    document.getElementById('menu-sapi').checked = false;
    sapi.classList.remove('box');
    document.getElementById('menu-ayam').checked = false;
    ayam.classList.remove('box');
    document.getElementById('menu-vegetarian').checked = false;
    vegetarian.classList.remove('box');
    document.getElementById('menu-keju').checked = false;
    keju.classList.remove('box');
    document.getElementById('menu-selada').checked = false;
    selada.classList.remove('box');
    document.getElementById('menu-tomat').checked = false;
    tomat.classList.remove('box');
    document.getElementById('menu-bawang').checked = false;
    bawang.classList.remove('box');
    document.getElementById('menu-jalapeno').checked = false;
    jalapeno.classList.remove('box');
    document.getElementById('menu-tea').checked = false;
    teh.classList.remove('box');
    document.getElementById('menu-onion-rings').checked = false;
    onion.classList.remove('box');
    document.getElementById('menu-french-fries').checked = false;
    frenchFries.classList.remove('box');
    document.getElementById('menu-mayonaise').checked = false;
    mayo.classList.remove('box');
    document.getElementById('menu-bbq').checked = false;
    bbq.classList.remove('box');
    document.getElementById('menu-mustard').checked = false;
    mustard.classList.remove('box');
    x = 0;
    y = 0;
    z = 0;
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    i = 0;
    j = 0;
    k = 0;
});