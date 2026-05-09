let unitPrice = 1000;
let quantityInput = document.getElementById("quantity");
let totalPriceInput = document.getElementById("totalPrice");

function calculateTotal() {
   let quantity = parseInt(quantityInput.value) || 0;

   if (quantity < 0) {
      alert("Quantity can't be negative. Resetting to 0.");
      quantity = 0;
      quantityInput.value = 0;
   }

   let total = unitPrice * quantity;

   totalPriceInput.value = total;

   if(totalPriceInput.value > 10000){
    alert("Congratulations! You are eligible for a gift coupon.")
   }
}

let btn = document.getElementById('btn').addEventListener('click', ()=>{
    calculateTotal();
})