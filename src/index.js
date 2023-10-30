const express = require("express");
const path = require("path");

const app = express();



const port = 3000;



// Serving static files from the 'public' directory
app.use(express.static(path.join(__dirname, "e_commerce_site", "public")));

// Route for serving the index.html file



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "e_commerce_site", "public", "index.html"));
});



app.listen(port, () => {
    console.log("Server is running on port " + port);
});
