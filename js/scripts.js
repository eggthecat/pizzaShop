// business logic
// Define Customer
function Customer (name, phoneNumber, userId) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.userId = userId;
  }
  kjkl

  var
// Main Objectives
 //define what is doing what where how when why
// Customer name that will print in name area
// Customer pizzaSize selection that will print in size area
// Customer pizzaToppings selection that will be listed in the toppings area
// Customer price for entire order

// Stretch Goals

// Add sides for customer to selection
// Add option for delivery and pickup
// Add area for delivery information
// Add coupon code and logic for price to be adjusted
// Add sales tax to non-oregon orders
// Add option for dietary restrictions
// Add future delivery option
// Add footer tabs for feedback, instagram(fake account), facebook (fake account), twitter (fak account), link to BBB, and language option for spanish
// Add several more language options (Russian, Vietnamese, etc)


// user interface
$(document).ready(function(){
  $("form#customerOrderSubmit").submit(event(){
    event.preventDefualt();

    var firstName = $("input#firstName").val();
    var lastName  = $("input#lastName").val();
    var pizzaSize = $("").val();
    var pizzaToppings = $("").val();
    var pizzaPrice = $("").val();
    
  });
});
