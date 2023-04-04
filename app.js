const express = require('express');
const app = express();
const port =3000;

app.use(express.urlencoded({ extended: true }));


app.get('/:user', (req, res) => {
    res.send("Name: "+req.params.user);
    console.log("User: "+req.params.user);
})

app.listen(port, () => {
    console.log("listening on port 3000...");
});