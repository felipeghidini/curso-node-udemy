const express = require('express');
const router = express.Router();

const path = require('path');

// ler o body
router.use(express.urlencoded({
    extended: true,
}))

router.use(express.json());

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

router.post('/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Buscando usuario pelo usuario: ${id}`);

    res.sendFile(`${basePath}/users.html`);
})

module.exports = router;