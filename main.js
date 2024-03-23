const iPhone = document.querySelector(".iPhone");
const samsung = document.querySelector(".samsung");

iPhone.addEventListener("click", function(event) {
    let clickTarget = event.target;
    let activeButton = iPhone.querySelector(".active");
    let priceItem = iPhone.querySelector(".price");
    let currentPrice;

    let activeButtonColor = iPhone.querySelector(".active-border");

    if (clickTarget.classList.contains("color-btn") && !clickTarget.classList.contains("active-border")) {
        clickTarget.classList.add("active-border");
        activeButtonColor.classList.remove("active-border");
    }

    currentPrice = clickTarget.getAttribute("data-size");

    if (currentPrice === "medium") {
        priceItem.textContent = "Цена 64 999р.";
    }

    if (currentPrice === "large") {
        priceItem.textContent = "Цена 84 999р.";
    }
});

samsung.addEventListener("click", function(event) {
    let clickTarget = event.target;
    let activeButton = samsung.querySelector(".active");
    let priceItem = samsung.querySelector(".price");
    let currentPrice;

    let activeButtonColor = samsung.querySelector(".active-border");

    if (clickTarget.classList.contains("btn btn-primary") && !clickTarget.classList.contains("active-border")) {
        clickTarget.classList.add("active-border");
        activeButtonColor.classList.remove("active-border");
    }

    currentPrice = clickTarget.getAttribute("data-size");

    if (currentPrice === "medium") {
        priceItem.textContent = "Цена 35 999р.";
    }

    if (currentPrice === "large") {
        priceItem.textContent = "Цена 51 999р.";
    }
});

const audio = new Audio("sound/eralash.mp3");
const buttons = document.querySelectorAll(".Joke");

buttons.forEach(button => {
button.addEventListener("click", () => {
audio.play();
});
});