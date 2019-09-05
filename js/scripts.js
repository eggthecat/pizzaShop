// // business logic
//
//
// // Allow user to choose toppings and size for pizza order.
// //   Create a pizza object constructor with properties for toppings and size.
// //     Create a prototype method for the cost of a pizza depending on the selections chosen.
//
//
// function Pizza (size, toppings) {
//   this.size = size,
//   this.topping = topping
//
//
// Pizza.prototype.price = function(size, topping) {
//   if (new size === small) {
//   price += 7;
// } else if (new size === medium ) {
//   price += 9;
// }  else if (new size === large ) {
//   price += 11;
// }  else if (new topping === 1) {
//   price += 0.5;
// }  else if (new topping === 2) {
//   price += 1;
// }  else if (new topping === 3) {
//   price += 1.5;
// }  else if (new topping === 4) {
//   price += 2;
// }  else if (new topping === 5) {
//   price += 2.5;
// }  else if (new topping === 6) {
//   price += 3;
// }  else if (new topping === 7) {
//   price += 3.5;
// }  else if (new topping === 8) {
//   price += 4;
// }  else if (new topping === 9) {
//   price += 4.5;
//  }
//  return this.price
//  console.log(price);
// };





// user interface
$(document).ready(function(){
  $("form#orderInput").submit(function(event) {
    event.preventDefault()

    var pizzaSize = $("input:radio[name=size]:checked").val();
    console.log(pizzaSize);
    var pizzaToppings = $("").val();


  //   else {document.getElementById("result").innerHTML = "Your " + pizzaSize + "pizza with " + pizzaToppings + "will be " + pizzaPrice";
  // }

  });
});
