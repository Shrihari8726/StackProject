const express = require('express');
const app = express();  


app.get('/', (req, res) => {
    let incoming = req.header;
    console.log(incoming);
    res.send('<html><head><h4>Express App </h4></head><body>This is express Application</body></html>')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Express App Listening on port 5000");
});