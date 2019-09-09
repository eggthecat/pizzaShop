// // business logic
function Pizza (size, toppings) {
  this.size = size,
  this.toppings = toppings
}

Pizza.prototype.itemPrice = function(size, toppings) {
  var price = 0;
  if (this.size === "small") {
  price += 5;
} else if (this.size === "medium" ) {
  price += 9;
}  else if (this.size === "large" ) {
  price += 13;
 }
for (var i = 0; i < this.toppings.length; i++){
  if(this.toppings.length === 1) {
    price +=0.5;
  } else if (this.toppings.length === 2) {
    price +=0.5;
  } else if (this.toppings.length === 3) {
    price +=0.5;
  }else if (this.toppings.length === 4) {
    price +=0,5;
  }else if (this.toppings.length === 5) {
    price +=0.5;
  }
}
 return this.cost = price;
};





// user interface
$(document).ready(function(){
  $("form#orderInput").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("input:radio[name=size]:checked").val();
    var toppingsSelected = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      toppingsSelected.push($(this).val());
    });
    var pizza = new Pizza(pizzaSize, toppingsSelected);
    pizza.itemPrice();

    $("#result").text(pizza.cost);

    console.log(pizzaSize);
    console.log(pizza.cost);
    console.log(pizza.toppings);


  //   else {document.getElementById("result").innerHTML = "Your " + pizzaSize + "pizza with " + pizzaToppings + "will be " + pizzaPrice";
  // }

  });
});
