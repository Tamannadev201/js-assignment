const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const document = dom.window.document;

let cart = [];

// Function to add items to the cart and show cart info
function addToCart(productName, priceId) {
    const priceText = "₱100";  // Simulating a price from an HTML element like priceId
    const price = parseFloat(priceText.replace('₱', '').trim());

    if (isNaN(price)) {
        console.error("Invalid price value: " + priceText);
        return;
    }

    cart.push({ name: productName, price: price });

    updateCartIcon();
    renderCart();
    displayAveragePrice();

    if (isOdd(cart.length)) {
        showCartMessage("You added an Odd Number");
    } else {
        showCartMessage("You added an Even Number");
    }
}

// Check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}

// Update the cart count displayed (to console)
function updateCartIcon() {
    console.log("Cart Count: " + cart.length);
}

// Display the average price of the items in the cart
function displayAveragePrice() {
    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    const prices = cart.map(item => item.price);
    const average = findAverage(prices);
    console.log(`Average Price: ₱${average.toFixed(2)}`);
}

// Calculate the average of an array of numbers
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((total, num) => total + num, 0) / numbers.length;
}

// Display messages on the console
function showCartMessage(message) {
    console.log(message);
}

// Calculate the discount for a product
function calculateDifference(priceId, resultId) {
    const priceElement = "₱100";  // Simulating a price for calculation
    let originalPrice = parseFloat(priceElement.replace(/[^0-9.]/g, ''));
    let discountAmount = originalPrice * 0.05; // 5% discount
    let discountedPrice = originalPrice - discountAmount;

    console.log(`Discounted Price: ₱${discountedPrice.toFixed(2)}`);
}

// Show the leap year message
function showLeapYearMessage(year) {
    if (isLeapYear(year)) {
        console.log(`${year} is a Leap Year! Enjoy Special Discounts!`);
    } else {
        console.log(`${year} is not a Leap Year. No Special Discounts this year.`);
    }
}

// Check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

// Render the cart to the console
function renderCart() {
    console.log(cart);
}


