const num1 = 2;
const num2 = 31;
const multiply = num1 * num2; // 62

const random = Math.floor(Math.random() * 100) + 1; // Random integer > 0

const num3 = 14;
const num4 = 5;
const mod = num3 % num4; // Remainder = 4

const max = Math.max(10, 15, 20, 5); // Highest number = 20

function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
        return "This one is on me!"; // Free sample
    } else if (distance > 400 && distance <= 2000) {
        return "That will be twenty dollars."; // Charges $20
    } else if (distance > 2000 && distance <= 2500) {
        return "I will gladly take your thirty bucks."; // Charges $30
    } else {
        return "No can do."; // Rides over 2500 feet not allowed
    }
}

function ternaryCheckCity(city) {
    return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
    switch (tip) {
        case "generous":
            return "Thank you so much.";
        case "not as generous":
            return "Thank you.";
        default:
            return "Bye.";
    }
}
// Write your code here