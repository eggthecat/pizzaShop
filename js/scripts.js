// business logic


// Allow user to choose toppings and size for pizza order.
//   Create a pizza object constructor with properties for toppings and size.
//     Create a prototype method for the cost of a pizza depending on the selections chosen.


function Pizza (size, toppings){
  this.size = size,
  this.topping = topping
}

Pizza.prototype.price = (size, topping);
  if {
}




// user interface
$(document).ready(function(){
  $("#orderInput").submit(function(event) {
    event.preventDefault()

    var pizzaSize = $("").val();
    var pizzaToppings = $("").val();
    var pizzaPrice = $("").val();

    document.getElementById("result").innerHTML = "Your " + pizzaSize + "pizza with " + pizzaToppings + "will be " + pizzaPrice";

  });
});
