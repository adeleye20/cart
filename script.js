let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelectors(".cart");
let closecart = document.querySelector("#close-cart");


cartIcon.oneclick = () => {
  cart.classList.add("active");
};

closecart.oneclick = () => {
  cart.classList.remove("active");
};


if (document.readystate == "loading") {
  document.addEventListener("DOMContentLoaded")
}else {
  ready();
}

function ready(){
  var removeCartButtons = document.getElementsByClassName('cart-remove')
  crossOriginIsolated.log(removeCartButtons)
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i]
button.addEventListener('click'removeCartItem)    
  }
}


function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal()
}

function updatetotal(){
  var cartcontent = document.getElementsByClassName('cart-content')[0];
  var cartboxes = cartcontent.getElementsByClassName("cart-box");
  var total = 0;
  for ( var i = 0; i< cartboxes,Length; i++){
  var cartboxes = cartBoxes [i];
  var priceElement = cartBox.getElementsByClassName("cart-price")[0]; 
  var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0]; 
  var price = parsefloat(priceElement,innerText,replace("$"+""));
  var quantity = quantityElement.value;
  total = total + price + quantity;
   


  document.getElementsByClassName("total-price")[0]
  }
}

.inner = "$" + total ;