const UNIT_PRICE = 500;
const COUPON_THRESHOLD = 2000;
const DELIVERY_INSIDE = 50;
const DELIVERY_OUTSIDE = 120;

let quantityInput = document.getElementById('quantity');
let totalPriceElement = document.getElementById('totalPrice');
let couponMessage = document.getElementById('couponMessage');
let deliverySelect = document.getElementById('delivery');
let deliveryChargeElement = document.getElementById('deliveryCharge');
let termsCheckbox = document.getElementById('terms');
let submitButton = document.getElementById('submitBtn');

function updateTotalPrice(){
    let quantity = parseInt(quantityInput.value);

    if(quantity <= 0 || isNaN(quantity)){
        quantityInput.value = 1;
        quantity = 1;
    }

    const totalPrice = quantity*UNIT_PRICE;
    totalPriceElement.textContent = totalPrice;

    if(totalPriceElement.value > COUPON_THRESHOLD){
        couponMessage.textContent = "You are now eligible for a coupon.";
    } else {
        couponMessage.textContent = "";
    }
}

function updateDeliveryCharge() {
    const deliveryOption = deliverySelect.value;
    let deliveryCharge;
    
    if (deliveryOption === 'inside') {
        deliveryCharge = DELIVERY_INSIDE;
    } else {
        deliveryCharge = DELIVERY_OUTSIDE;
    }
    
    deliveryChargeElement.textContent = deliveryCharge;
}