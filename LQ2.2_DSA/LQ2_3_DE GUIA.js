// print the Items
console.log("A.Pepsi Cola (Php 30.00)\nB.Coca Cola (Php 35.00)\nC.Apple (per kg) (Php 100.00) \nD.Orange (per kg) (php 120.00) \nE.Hotdogs (per kg) (Php 180.00)");

// prompt the user to enter the item choice and quantity
let item_choice = prompt("Enter your choice (A|B|C|D|E): ").toUpperCase();
let QTY = parseInt(prompt("Enter the quantity: "));
let price = null;

// calculate the price based on the item choice
switch (item_choice) {
    case "A":
        price = QTY * 30;
        alert(`The Total Price of the order ${item_choice} x ${QTY}: ${price}`);
        break;
    case "B":
        price = QTY * 35;
        alert(`The Total Price of the order ${item_choice} x ${QTY}: ${price}`);
        break;
    case "C":
        price = QTY * 100;
        alert(`The Total Price of the order ${item_choice} x ${QTY}: ${price}`);
        break;
    case "D":
        price = QTY * 120;
        alert(`The Total Price of the order ${item_choice} x ${QTY}: ${price}`);
        break;
    case "E":
        price = QTY * 180;
        alert(`The Total Price of the order ${item_choice} x ${QTY}: ${price}`);
        break;
    default:
        alert("No matching item! Try to re-run the program.");
}


