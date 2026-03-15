// Static data
const DAYS = 30;
const UNIT_PRICE = 1000;

// Get elements
const priceInput = document.getElementById("price");
const quantityInput = document.getElementById("quantity");
const totalPriceInput = document.getElementById("totalPrice");

// Real-time calculation when quantity changes
quantityInput.addEventListener("input", calculateTotal);

function calculateTotal() {

    let quantity = parseInt(quantityInput.value);

    // Validation: prevent negative quantity
    if (quantity < 0) {
        alert("Quantity cannot be less than 0");
        quantity = 0;
        quantityInput.value = 0;
    }

    // Use fixed unit price
    priceInput.value = UNIT_PRICE;

    // Calculate total price
    let totalPrice = UNIT_PRICE * quantity * DAYS;

    // Show total price
    totalPriceInput.value = totalPrice;

    // Gift coupon notification
    if (totalPrice > 1000) {
        alert("You are eligible for a gift coupon!");
    }
}

// Set default unit price when page loads
priceInput.value = UNIT_PRICE;