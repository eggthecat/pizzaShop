// business logic
// Define Customer
// function Customer (firstName, lastName, phoneNumber, userId) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
//   this.userId = userId;
//   }
//
//   Customer.prototype.name = function (firstName, lastName) {
//     return this.firstName + " " + this.lastName;
//     console.log(name);
//     console.log(this.name);
//     console.log(firstName);
//     console.log(this.firstName);

    // document.getElementById("demo1").innerHTML = this.name;
    // document.getElementById("demo2").innerHTML =
  // }
// Define order
// function Order (orderNumber,orderAmount, pizzaSize, pizzaTopping)
//   Customer.prototype.order = function () {
//     return
//   }


// user interface
$(document).ready(function(){
  $("#orderInput").submit(function(event) {
    event.preventDefault()

    var firstName = $("#firstName").val();
    var lastName  = $("#lastName").val();
    var pizzaSize = $("").val();
    var pizzaToppings = $("").val();
    var pizzaPrice = $("").val();
    console.log(lastName);
    console.log(firstName);

  });
});
