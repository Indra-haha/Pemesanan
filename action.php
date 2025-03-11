<?php

$menu = $_POST['menu'];
$hargaMenu = 0;
if ($menu == 'Burger') {
    $hargaMenu = 25000;
} else {
    $hargaMenu = 27000;
}

$roti = $_POST['roti'];
$hargaRoti = 0;
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
$hargaPatty = 0;
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
$ToppingGrab = [
    array($topping[0], $hargaTopping[0]),
    array($topping[1], $hargaTopping[1]),
    array($topping[2], $hargaTopping[2]),
    array($topping[3], $hargaTopping[3]),
    array($topping[4], $hargaTopping[4]),
];
$filteredToppingGrab = [];
foreach ($ToppingGrab as $item) {
    if (!empty($item[0]) || !empty($item[1])) {
        $filteredToppingGrab[] = $item;
    }
}
if (count($filteredToppingGrab) === 0) {
    $filteredToppingGrab[0] = "-";
    $filteredToppingGrab[1] = "-";
}

$saus = array(
    isset($_POST['mayo']) ? $_POST['mayo'] : null,
    isset($_POST['bbq']) ? $_POST['bbq'] : null,
    isset($_POST['mustard']) ? $_POST['mustard'] : null,
    isset($_POST['sambal']) ? $_POST['sambal'] : null
);
$filteredSausGrab = [];
foreach ($saus as $item) {
    if (!empty($item[0])) {
        $filteredSausGrab[] = $item;
    }
}

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
$SideGrab = [
    array($side[0], $hargaSide[0]),
    array($side[1], $hargaSide[1]),
    array($side[2], $hargaSide[2])
];
$filteredSideGrab = [];
foreach ($SideGrab as $item) {
    if (!empty($item[0]) || !empty($item[1])) {
        $filteredSideGrab[] = $item;
    }
}
if (count($filteredSideGrab) === 0) {
    $filteredSideGrab[0] = "-";
    $filteredSideGrab[1] = "-";
}

$note = $_POST['notes'];
if ($note == "") {
    $note = "-";
}

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

$tax = 0.1 * $total;
$totalAkhir = $total - $tax;

$data = [
    array('Menu', $menu, "Rp. " . $hargaMenu),
    array('Roti', $roti, "Rp. " . $hargaRoti),
    array('Isian', $daging, "-"),
    array('Ukuran', $patty == "" ? "-" : $patty, $hargaPatty == 0 ? "-" : $hargaPatty)
];

$statusComplete = "";
if ($patty === "Regular" || $patty === "Double Patty") {
    $statusComplete = "";
} else {
    $statusComplete = "*Upss... Ukuran kosong";
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pemesanan</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>

<body class="bg-dark-subtle font-secondary">
    <div class="m-auto p-1" style="width:500px;">
        <div class="mx-1 mb-1 p-2 fw-bold font-20 rounded-2 align-items-center d-flex rounded-2 rounded-bottom-0" style="width:480px;background-color:orange;color:white;">
            <div class="w-20 m-0 p-0 align-items-center ms-2">
                <a href="index.html"><i class="bi bi-arrow-left-square text-white"></i></a>
            </div>
            <div class="w-80 p-1 m-1 align-items-center m-auto px-5">
                Detail Pemesanan
            </div>
        </div>

        <div class="mx-1 p-0 fw-normal font-15 align-items-center d-flex row">
            <?php
            foreach ($data as $baris) {
                foreach ($baris as $kolom) {
            ?>
                    <div class="mb-1 col-3 p-1 bg-white px-2 table-custom" style="width:160px;"><?= $kolom ?></div>
            <?php }
            }
            ?>
        </div>
        <div class="mx-1 d-flex bg-white row align-items-baseline" style="width:480px;">
            <div class="col-1 p-1 bg-white px-2 table-custom" style="width:160px;">Topping</div>
            <div class="m-0 p-0 fw-normal font-15 align-items-center d-flex row" style="width:320px;">
                <?php
                foreach ($filteredToppingGrab as $baris) {
                    if ($baris >= 2) {
                        foreach ($baris as $kolom) {
                            if (is_int($kolom)) {
                ?>
                                <div class="mb-0 col-1 p-1 bg-white px-2 table-custom" style="width:160px;"><?= "Rp. " . $kolom ?></div>
                            <?php
                            } else {
                            ?><div class="mb-0 col-1 p-1 bg-white px-2 table-custom" style="width:160px;"><?= $kolom ?></div>
                        <?php
                            }
                        }
                    } else { ?>
                        <div class="mb-0 col-1 p-1 bg-white px-2 table-custom" style="width:160px;"><?= $baris ?></div>
                <?php }
                } ?>
            </div>
        </div>
        <div class="mx-1 d-flex mt-1 mb-0 bg-white align-items-baseline" style="width:480px;">
            <div class="mb-0 col-1 p-1 bg-white px-2 table-custom" style="width:160px;">Saus</div>
            <div class="m-0 p-0 fw-normal font-15 align-items-center d-flex row" style="width:160px;">
                <?php
                foreach ($filteredSausGrab as $item) {
                ?>
                    <div class="mb-0 col-1 p-1 bg-white px-2 table-custom" style="width:160px;"><?= $item ?></div>
                <?php
                }
                ?>
            </div>
        </div>
        <div class="mx-1 d-flex mt-1 mb-0 bg-white align-items-baseline" style="width:480px;">
            <div class="mb-0 col-1 p-1 bg-white px-2 table-custom" style="width:160px;">Side</div>
            <div class="m-0 p- fw-normal font-15 align-items-center d-flex row" style="width:320px;">
                <?php
                foreach ($filteredSideGrab as $item) {
                    if ($item >= 2) {
                        foreach ($item as $kolom) {
                            if (is_int($kolom)) {
                ?>
                                <div class="mb-0 col-1 p-1 bg-white px-2 table-custom" style="width:160px;"><?= "Rp. " . $kolom ?></div>
                            <?php
                            } else {
                            ?>
                                <div class="mb-0 col-1 p-1 bg-white px-2 table-custom" style="width:160px;"><?= $kolom ?></div>
                        <?php }
                        }
                    } else { ?>
                        <div class="mb-0 col-1 p-1 bg-white px-2 table-custom" style="width:160px;"><?= $item ?></div>
                <?php }
                } ?>
            </div>
        </div>
        <div class="mx-1 d-flex mt-1 mb-0 align-items-baseline bg-white p-1" style="width:480px;">
            <div class="mb-0 col-1 px-1 table-custom text-start fw-normal font-15" style="width:160px;">Note</div>
            <div class="m-0 col-1 p-1 fw-normal font-15 " style="width:320px;"><?= $note ?></div>
        </div>
        <div class="mx-1 d-flex mt-1 mb-0 align-items-baseline bg-white" style="width:480px;">
            <div class="mb-0 col-1 px-2 table-custom text-end fw-bold font-15" style="width:320px;">Total</div>
            <div class="m-0 col-1 p-1 fw-normal font-15 " style="width:160px;"><?= "Rp. " . $total ?></div>
        </div>
        <div class="mx-1 d-flex mt-1 mb-0 align-items-baseline bg-white" style="width:480px;">
            <div class="mb-0 col-1 px-2 table-custom text-end fw-bold font-15" style="width:320px;">Tax(10%)</div>
            <div class="m-0 col-1 p-1 fw-normal font-15 " style="width:160px;"><?= "Rp. " . $tax ?></div>
        </div>
        <div class="mx-1 d-flex mt-1 mb-0 align-items-baseline rounded-2 rounded-top-0" style="width:480px;color :white;background-color:orange;">
            <div class="mb-0 col-1 px-2 table-custom text-end fw-bold font-17" style="width:320px;">Total Akhir</div>
            <div class="m-0 col-1 p-1 fw-bold font-15 " style="width:160px;"><?= "Rp. " . $totalAkhir ?></div>
        </div>
        <div class="d-flex mx-1" style="width:475px;">
            <div style="width:60%;">
                <i class="fw-normal p-3 mt-2" style="font-size:14px;">Semoga Harimu Menyenangkan</i>
            </div>
            <div class="d-block p-0 m-1 mt-1 mr-0 align-items-end" style="width:40%;">
                <?php if ($statusComplete != "") { ?>
                    <a href="index.html" class="btn btn-primary m-0 mt-1 font-12 fw-normal" style="width:100%;">Kembali</a>
                    <div class="text-center" style="font-size:12px;"><?= $statusComplete ?></div>
                <?php
                } else {
                ?>
                    <button type="submitPesanan" class="btn btn-success m-0 mt-1" name="submitPesanan" value="kirim" style="width:100%;">Pesan</button>
                    <div class="text-center" style="font-size:12px;">Cek Dulu Pesananmu</div>
                <?php
                } ?>

            </div>
        </div>
    </div>
</body>

</html>