import express from 'express'
const router = express.Router()

router.post('/login', (req, res) => {
  res.json({ mensaje: 'Iniciar sesión en Gretta' })
})

router.post('/registro', (req, res) => {
  res.json({ mensaje: 'Registrarse en Gretta' })
})

export default router // Cuando se exporta por default se puede importar con cualquier nombre
