<?php
$menu = $_POST['menu'];
$hargaMenu = " ";
if ($menu == 'Burger') {
    $hargaMenu = 25000;
} else {
    $hargaMenu = 27000;
}

$roti = $_POST['roti'];
$hargaRoti = "";
if ($roti == 'Original') {
    $hargaRoti = 1000; //default
} else if ($roti == 'Potato Bun') {
    $hargaRoti = 5000;
} else {
    $hargaRoti = 2000;
}

$daging = "";
if (isset($_POST['pil-sapi'])) {
    $daging = $_POST['pil-sapi'];
} else if (isset($_POST['pil-ayam'])) {
    $daging = $_POST['pil-ayam'];
} else if (isset($_POST['pil-vegetarian'])) {
    $daging = $_POST['pil-vegetarian'];
}

$patty = "";
$hargaPatty = "";
if (isset($_POST['regular'])) {
    $patty = $_POST['regular'];
    $hargaPatty = 5000; //default
} else if (isset($_POST['double'])) {
    $patty = $_POST['double'];
    $hargaPatty = 7000;
}

$topping = array(
    isset($_POST['keju']) ? $_POST['keju'] : null,
    isset($_POST['selada']) ? $_POST['selada'] : null,
    isset($_POST['telur']) ? $_POST['telur'] : null,
    isset($_POST['patty']) ? $_POST['patty'] : null,
    isset($_POST['jalapeno']) ? $_POST['jalapeno'] : null
);
$hargaTopping = array(
    isset($_POST['keju']) ? 2000 : null,
    isset($_POST['selada']) ? 1000 : null,
    isset($_POST['telur']) ? 5000 : null,
    isset($_POST['patty']) ? 12000 : null,
    isset($_POST['jalapeno']) ? 5000 : null //default
);

$saus = array(
    isset($_POST['mayo']) ? $_POST['mayo'] : null,
    isset($_POST['bbq']) ? $_POST['bbq'] : null,
    isset($_POST['mustard']) ? $_POST['mustard'] : null,
    isset($_POST['sambal']) ? $_POST['sambal'] : null
);

$side = array(
    isset($_POST['teh']) ? $_POST['teh'] : null,
    isset($_POST['onion']) ? $_POST['onion'] : null,
    isset($_POST['french']) ? $_POST['french'] : null
);
$hargaSide = array(
    isset($_POST['teh']) ? 5000 : null,
    isset($_POST['onion']) ? 10000 : null,
    isset($_POST['french']) ? 12000 : null
);

$note = $_POST['notes'];

$total = 0;
$total += $hargaMenu;
$total += $hargaRoti;
foreach ($hargaTopping as $item) {
    if ($item != NULL) {
        $total += $item;
    }
}
foreach ($hargaSide as $item) {
    if ($item != NULL) {
        $total += $item;
    }
}

$data = [
    array('Menu', $menu, $hargaMenu),
    array('Roti', $roti, $hargaRoti),
    array('Isian', $daging, " "),
    array('Topping', array($topping), array($hargaTopping)),
    array('Saus', array($saus), " "),
    array('Side', array($side), array($hargaSide)),
    array('Tax', '10%', " "),
    array('Note', $note, " "),
    array('Total', " ", $total)
];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pemesanan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
</head>

<body class="bg-dark-subtle font-secondary font-secondary">
    <div class="m-5 rounded-2">
        <div class="bg-white m-auto text-center m-10 p-3 fw-bold font-17" style="width:500px;">
            Detail Pemesanan
        </div>
        <div class="m-10">
            <table class="bg-white m-auto table table-hover table-bordered" style="width:500px;">
                <tr class="text-center fw-bold font-15">
                    <td>Nama</td>
                    <td>Produk</td>
                    <td>Harga</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>

    </div>

</body>

</html>