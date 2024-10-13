// Date: 2021/09/26
// Description: This is a simple receipt maker for a restaurant. It calculates the price of the dishes, adds a tax and a discount based on the number of guests.

// Data structure for the dishes
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
];

// Tax rate
const tax = 1.20;

// Function to calculate the price of the dishes
function getPrices(taxBoolean){

    // Loop through the dishes
    for(menu of dishData){

        let finalPrice; // Variable to store the final price


        // Check if the taxBoolean is true or false
        if(taxBoolean == true){ 

            finalPrice = menu.price * tax; // Calculate the price with tax

        } else if (taxBoolean == false){

            // If the taxBoolean is false, the price is the same as the original price
            finalPrice = menu.price;

        } else {

            // If the taxBoolean is not a boolean, log an error message
            console.log("You need to padd a boolean to the getPrices call!");

            // Exit the function
            return;
        }

        // Log the dish and the price
        console.log(`Dish: ${menu.name}  Price: $${finalPrice}`);
        
    }

}

// Function to calculate the discount based on the number of guests
function getDiscount(taxBoolean, guest){

    getPrices(taxBoolean); // Call the getPrices function
    
    // Check if the guest is a number between 0 and 30
    if((typeof(guest) === 'number') && (guest > 0) && (guest< 30)){

        let discount = 0;

        if(guest < 5){

            discount = 5;

        } else if(guest >= 5) {

            discount = 10;
        }

        console.log("Discount is: $" + discount);

    } else {

        // If the guest is not a number between 0 and 30, log an error message
        console.log("The second argument must be a number between 0 and 30");
    }

}

getDiscount(true, 4);
//getDiscount(false, 4);
//getDiscount(true, 6);
//getDiscount(false, 6);
//getDiscount(true, 31);
//getDiscount(false, 31);