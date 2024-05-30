document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelector("#products");
    const orders = document.querySelector("#orders");
    const package1 = document.querySelector("#package");

    const basicOpt = document.querySelector("[data-value='basic']");
    const professionalOpt = document.querySelector("[data-value='professional']");
    const premiumOpt = document.querySelector("[data-value='premium']");

    const checkboxAccounting = document.querySelector("#accounting");
    const checkboxTerminal = document.querySelector("#terminal");

    const listItem1 = document.querySelector(".calc__summary>ul>li:nth-child(1)");
    const itemCalc1 = listItem1.querySelector(".item__calc");
    const itemPrice1 = listItem1.querySelector(".item__price");
    const listItem2 = document.querySelector(".calc__summary>ul>li:nth-child(2)");
    const itemCalc2 = listItem2.querySelector(".item__calc");
    const itemPrice2 = listItem2.querySelector(".item__price");
    const listItem3 = document.querySelector(".calc__summary>ul>li:nth-child(3)");
    const itemCalc3 = listItem3.querySelector(".item__calc");
    const itemPrice3 = listItem3.querySelector(".item__price");
    const listItem4 = document.querySelector(".calc__summary>ul>li:nth-child(4)");


    const listItem5 = document.querySelector(".calc__summary>ul>li:nth-child(5)");
    let totalPrice = document.querySelector(".total__price");


    function onlyPositiveInt(e) {
        if (
            (this.value >= 0 && parseFloat(this.value) % 1 === 0) ||
            this.value === ""
        ) {
        } else {
            alert("Use whole numbers");
        }
    }

    function openBox(e) {
        this.classList.toggle("open");
    }
    

    //inputs

    const PRODUCT_PRICE = 0.5;
    let ProductsPrice = 0;
    let productsSum = 0;
    products.addEventListener("input", onlyPositiveInt);
    products.addEventListener("input", function (e) {
        if (products.value === "") {
            itemCalc1.innerText = "20 * $0.5";
            itemPrice1.innerText = "$10";
        } else {
            ProductsPrice = products.value;
            productsSum = ProductsPrice * PRODUCT_PRICE;
            itemCalc1.innerText = `${ProductsPrice} * $0.5`;
            itemPrice1.innerText = `$${productsSum}`;
            totalPrice.innerText = `${OrderSum + productsSum + AccountingPrice + terminalPrice + basicPrice + professionalPrice + premiumPrice}`;
        }
    });

    const Order_PRICE = 0.5;
    let OrdersPrice = 0;
    let OrderSum = 0;
    orders.addEventListener("input", onlyPositiveInt);
    orders.addEventListener("input", function (e) {
        if (orders.value === "") {
            itemCalc2.innerText = "20 * $0.5";
            itemPrice2.innerText = "$10";
        } else {
            OrdersPrice = orders.value;
            OrderSum = OrdersPrice * Order_PRICE;
            itemCalc2.innerText = `${OrdersPrice} * $0.5`;
            itemPrice2.innerText = `$${OrderSum}`;
            totalPrice.innerText = `${OrderSum + productsSum + AccountingPrice + terminalPrice + basicPrice + professionalPrice + premiumPrice}`;
        }
    });


    package1.addEventListener("click", openBox);

    // to choose from the list

    let basicPrice = 0;
    let professionalPrice = 0;
    let premiumPrice = 0;
    let lastSelectedPackage = ""; // flaga śledząca ostatnią wybraną opcję

    basicOpt.addEventListener("click", function selectBasic(e) {
        if (lastSelectedPackage !== "Basic") {
            lastSelectedPackage = "Basic";
            professionalPrice = 0; // zerowanie pozostałych cen, jeśli są ustawione
            premiumPrice = 0;
            let basic = "Basic";
            package1.firstElementChild.innerText = basic;
            itemCalc3.innerText = basic;
            itemPrice3.innerText = `$0`;
            basicPrice = 0; // resetowanie ceny podstawowej
            totalPrice.innerText = calculateTotalPrice();
        }
    });

    professionalOpt.addEventListener("click", function selectProfessional(e) {
        if (lastSelectedPackage !== "Professional") {
            lastSelectedPackage = "Professional";
            basicPrice = 0;
            premiumPrice = 0;
            let professional = "Professional";
            package1.firstElementChild.innerText = professional;
            itemCalc3.innerText = professional;
            itemPrice3.innerText = `$25`;
            professionalPrice = 25;
            totalPrice.innerText = calculateTotalPrice();
        }
    });

    premiumOpt.addEventListener("click", function selectPremium(e) {
        if (lastSelectedPackage !== "Premium") {
            lastSelectedPackage = "Premium";
            basicPrice = 0;
            professionalPrice = 0;
            let premium = "Premium";
            package1.firstElementChild.innerText = premium;
            itemCalc3.innerText = premium;
            itemPrice3.innerText = `$60`;
            premiumPrice = 60;
            totalPrice.innerText = calculateTotalPrice();
        }
    });

    function calculateTotalPrice() {
        return `${OrderSum + productsSum + AccountingPrice + terminalPrice + basicPrice + professionalPrice + premiumPrice}`;
    }

    // checkboxes
    let AccountingPrice = 0;
    checkboxAccounting.addEventListener("change", function (e) {
        listItem4.classList.toggle("open");
        if (checkboxAccounting.checked) {
            AccountingPrice += 10;
        } else {
            AccountingPrice -= 10;
        }
        totalPrice.innerText = `${OrderSum + productsSum + AccountingPrice + terminalPrice + basicPrice + professionalPrice + premiumPrice}`;
    });

    let terminalPrice = 0;
    checkboxTerminal.addEventListener("change", function (e) {
        listItem5.classList.toggle("open");
        if (checkboxTerminal.checked) {
            terminalPrice += 10;
        } else {
            terminalPrice -= 10;
        }
        totalPrice.innerText = `${OrderSum + productsSum + AccountingPrice + terminalPrice + basicPrice + professionalPrice + premiumPrice}`;
    });




});