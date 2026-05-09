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

function toggleSubmitButton() {
    if (termsCheckbox.checked) {
        submitBtn.style.display = 'block';
    } else {
        submitBtn.style.display = 'none';
    }
}

quantityInput.addEventListener('input', updateTotalPrice);
quantityInput.addEventListener('change', updateTotalPrice);
deliverySelect.addEventListener('change', updateDeliveryCharge);
termsCheckbox.addEventListener('change', toggleSubmitButton);

submitBtn.addEventListener('click', ()=>{
    const address = document.getElementById('address').value;
    
    if (!address.trim()) {
        alert('Please enter your shipping address!');
        return;
    }
    
    const totalPrice = parseInt(totalPriceElement.textContent);
    const deliveryCharge = parseInt(deliveryChargeElement.textContent);
    const grandTotal = totalPrice + deliveryCharge;
    
    alert(`Order submitted successfully!\nTotal Amount: ${totalPrice} Tk\nDelivery Charge: ${deliveryCharge} Tk\nGrand Total: ${grandTotal} Tk`);
});

updateTotalPrice();
updateDeliveryCharge();