const express = require('express')
const path = require("path")
const hbs = require("hbs")
const app = express()
const PORT = process.env.PORT || 3000

const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../template/views")
const partialPath = path.join(__dirname,"../template/partial")

app.set("view engine", "hbs")
app.set("views", templatePath)
hbs.registerPartials(partialPath)

app.use(express.static(staticPath))

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/about', function (req, res) {
    res.render('about')
})

app.get('/weather', function (req, res) {
    res.render('weather')
})

app.get('*', function (req, res) {
    res.render('error')
})

app.listen(PORT, () => {
    console.log(`app listen in port ${PORT}`);
})