function calcTip(){
/* --------------------------------Step 1: grab the input values------------------------------------------------------ */
                                                          //sets a variable for the tip Amount selector to the VALUE of the #tipForm selector
                                                          //sets a variable for the bill amount selector using the VALUE of the #billInput selector
let tipAmount = document.getElementById('tipForm').value;
let billAmount = document.getElementById('billInput').value;

/* ---------------------------------------Step 2: turn strings into numbers, use parseFloat() method to do this.-----------  IE: let vairable = parseFloat(stringVariable)----------------------------- */
                                                          // sets a variable for the Tip Amount that is a number
                                                          // sets a variable for the Bill Amount that is a number
tipAmount = parseFloat(tipAmount);
billAmount = parseFloat(billAmount);

/* --------------------------------Step 3: grab the elements---------------------------------------------------------- */
                                                          // sets a var to the ID of 'bill-p'
                                                          // sets a var to the ID of 'tip-p'
                                                          // sets a var to the ID of 'total-p'
let bill = document.getElementById('bill-p');
let tip = document.getElementById('tip-p');
let total = document.getElementById('total-p');

/* --------------------------------Step 4: Place your calculations here----------------------------------------------- */
                                                          // calulate total tip (tip % * bill) and store it in the a new variable
                                                          // calcualte total bill (totalTip + billAmount) and store it in a new variable

let totalTip = tipAmount * billAmount;
let totalBill = totalTip + billAmount;

/* --------------------------------Step 5: Append your HTML content with the new information-----**use .fixed(2) to display the value with 2 decimal places.-------------------- */
                                                          // change the innerHTML of the tip var from step 3 to the total tip from step 4
                                                          // change the innterHTML of the bill var from step 3 to the total bill var from step 2
                                                          // change the innerHTML of the total var from step 3 to the total bill var from step 4
bill.innerHTML = "$" + billAmount;
tip.innerHTML = `$${totalTip.toFixed(2)}`;
total.innerHTML = `$${totalBill.toFixed(2)}`;
}
