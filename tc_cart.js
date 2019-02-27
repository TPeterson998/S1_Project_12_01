"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Trent Peterson
    Date:   2.27.19 
   
   Filename: tc_cart.js
	
*/
// This sets a varabile call orderTotal and sets it equal to 0
var orderTotal = 0;
// This starts the cartHTML varabile with the starting html code
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";
// This is the for loop that will loop 4 times and set the rows up at in the table we are calling in 
for (var i = 0; i < item.length; i++) {
    // all of these just add more code to HTML code
    // They all include a array that has the index value that it calls change every time it loops
    cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td>";
    cartHTML += "<td>$" + itemPrice[i] + "</td>";
    cartHTML += "<td>" + itemQty[i] + "</td>";
    // REMEMBER TO CHECK IF SOMTHING IS AN ARRAY OR NOT
    // This finds the cost of each of the products
    var itemCost = itemPrice[i] * itemQty[i];
    // This adds in a little more HTML to the table to show the end total of the products
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    // This sets the total to the cost of all of the items
    orderTotal += itemCost;
}
// This adds in the final HTML code to properly set up a table
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
// This calls in the html code that was previously created
document.getElementById("cart").innerHTML = cartHTML;