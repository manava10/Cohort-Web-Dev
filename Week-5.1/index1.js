const express = require("express");
const app = express();

// Mathematical functions
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Route to calculate the sum
app.get("/sum", function (req, res) {
    // Destructure query parameters
    const { param1, param2 } = req.query;

    // Check if parameters are valid numbers
    if (isNaN(param1) || isNaN(param2)) {
        return res.status(400).send("Invalid Parameters. Please provide numeric values for 'param1' and 'param2'.");
    }

    // Convert parameters to numbers and calculate sum
    const result = sum(parseFloat(param1), parseFloat(param2));

    // Send the result as a response
    res.send(`The sum of the given numbers is ${result.toString()}`);
});

// Start the server
const PORT = 1234;
app.listen(PORT, () => {
    console.log(`The app is running at http://localhost:${PORT}`);
});

