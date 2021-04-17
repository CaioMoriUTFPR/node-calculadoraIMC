const express = require('express')

const app = express()
const porta = 3000

app.use(express.urlencoded( { extended: true } ))

app.get('/', (req, res) => {
    res.send('Página inicial ') 
})

app.get('/calculadora', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})

app.post('/calculadora', function (req, res) {
    var peso = Number(req.body.peso)
    var altura = Number(req.body.altura)
    var imc = calculadoraIMC(peso, altura)
    
    res.send(`<h1>Calculadora de IMC</h1> ${imc.toFixed(1)}`)
})

function calculadoraIMC (peso, altura) {
    var imc
    var peso
    var altura
    return imc = (peso / (altura * altura))
}

app.listen(porta, () => console.log(`Servidor no ar na porta ${porta}`))