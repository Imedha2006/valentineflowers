document.getElementById("bouquetOptions").addEventListener("change", function () {
    CheckOptions(document.getElementById("orderForm"));
});

document.getElementById("orderForm").addEventListener("reset", function () {
    resetOrder();
});

function getRadioValue(name) {
    let radios = document.getElementsByName(name);
    for (let radio of radios) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

function getSelectedValue(selectId) {
    let select = document.getElementById(selectId);
    return select.options[select.selectedIndex].value;
}

function CheckOptions(formRef) {
    let selectedOption = getSelectedValue("bouquetOptions");
    let chosenBouquet = getRadioValue("colour");

    if (selectedOption.includes("Champagne")) {
        document.getElementById("product1").querySelector("img").src = "white-gift.jpeg";
        document.getElementById("product2").querySelector("img").src = "pink-gift.jpeg";
        document.getElementById("product3").querySelector("img").src = "red-gift.jpeg";
    } else {
        document.getElementById("product1").querySelector("img").src = "white.jpeg";
        document.getElementById("product2").querySelector("img").src = "pink.jpeg";
        document.getElementById("product3").querySelector("img").src = "red.jpeg";
    }

    displayBouquet(chosenBouquet);
}

function displayBouquet(bouquet) {
    let orderDiv = document.getElementById("order");
    if (!bouquet) {
        orderDiv.innerHTML = "";
        return;
    }

    let productId = "product1";
    if (bouquet === "pink") productId = "product2";
    if (bouquet === "red") productId = "product3";

    orderDiv.innerHTML = document.getElementById(productId).outerHTML;
}

function resetOrder() {
    document.getElementById("product1").querySelector("img").src = "white.jpeg";
    document.getElementById("product2").querySelector("img").src = "pink.jpeg";
    document.getElementById("product3").querySelector("img").src = "red.jpeg";
    document.getElementById("order").innerHTML = "";
}