const express = require('express');
const ativosRouter = express.Router();

ativosRouter.get('/:codCliente', async (_req, res) => {
    res.status(200).json({ message: 'codCliente' });
});

ativosRouter.get('/:codAtivo', async (_req, res) => {
    res.status(200).json({ message: 'CodAtivo' });
});



module.exports = {
    ativosRouter,
}