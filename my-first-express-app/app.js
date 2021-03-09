const express = require('express')
const app = express()
const port = 3030;

// request handler

app.get('/profile', (req, res) => {
    res.send('Ova e ruta za profile')
});

app.get('/about', (req, res) => {
    res.send('Ova e about page')
});

app.get('/history', (req, res) => {
    res.send('Ova e history page')
});

app.post('/adress', (req, res) => {
    console.log('Name of the Adress')
})

app.put('/number', (req, res) => {
    res.send("070-500-000");
});

app.patch('city', (req, res => {
    console.log('Berlin')
}))



app.listen(`${port}`, () => {
    console.log(`Aplikacijata e startuvana na porta 3030...`)
})







// const express = require('express');
// const app = express();

// app.get('about', (req, res) => {
//     res.send('Ova e about page')
// });

// app.get('profile', (req, res) => {
//     res.send('Ova e profile page')
// });

// app.get('history', (req, res) => {
//     res.send('Ova e history page')
// });

// app.listen(3000, () => {
//     console.log('Aplikacijata e startuvana!')
// })



// 1. Da kreirate prva ekspress aplikacija
//2. Da otvorite 3 GET ruti: /about so response 'ova e about page' /profile ('ova e profile page') i /history 'ova e history page'


//3. Da otvorite POST, PUT i PATCH ruti so vash izbor na iminja na rutite i sodrzina na response

//HINT:Preku browser nemoze da ispratite POST,PUT i PATCH tuku samo GET requesti
// treba da instalirate Postman.