const express = require('express');
const router = express.Router();

const productos = [
    {id: 1, name: 'Baño a mascotas', precio: 'desde S/29.90', link: ''},
    {id: 2, name: 'Corte de pelo a mascotas', precio: 'desde S/29.90', link: ''},
    {id: 3, name: 'Corte de uñas a mascotas', precio: 'desde S/29.90', link: ''}
]

const locales = [
    {id: 1, name: 'San Miguel', direccion: 'Av. La Marina 253', horario: '9am a 6pm'}
]

router.get('/', (req, res) => {
    res.send('Node JS api');
});

router.get('/api/productos', (req, res) =>{
    /* #swagger.responses[200] = {
          description: "Operacion exitosa",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/myReferencedProductArray"                             
              }
            }
          }
      }
  */
    res.send(productos);
});

router.get('/api/locales', (req, res) =>{
    /* #swagger.responses[200] = {
          description: "Operacion exitosa",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/myReferencedLocalArray"                             
              }
            }
          }
      }
  */
    res.send(locales);
});

router.get('/api/productos/:id', (req, res) => {
    const producto = productos.find(c => c.id === parseInt(req.params.id));
    /* #swagger.responses[200] = {
          description: "Operacion exitosa",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/Producto"
              }
            }
          }
      }
  */
    if (!producto) return res.status(404).send('Producto no encontrado');
    else res.send(producto);
});

router.get('/api/locales/:id', (req, res) => {
    const local = locales.find(c => c.id === parseInt(req.params.id));
    /* #swagger.responses[200] = {
          description: "Operacion exitosa",
          content: {
            "application/json": {
              schema: { 
                $ref: "#/definitions/Local"
              }
            }
          }
      }
  */
    if (!local) return res.status(404).send('Local no encontrado');
    else res.send(local);
});

router.post('/api/productos', (req, res) => {
    const producto = {
        id: productos.length + 1,
        name: req.body.name,
        precio: req.body.precio,
        link: req.body.link
    };
    productos.push(producto);
    res.send(producto);
});

router.post('/api/locales', (req, res) => {
    const local = {
        id: locales.length + 1,
        name: req.body.name,
        direccion: req.body.direccion,
        horario: req.body.horario
    };
    productos.push(local);
    res.send(local);
});

router.delete('/api/productos/:id', (req, res) => {
    const producto = productos.find(c => c.id === parseInt(req.params.id));
    if (!producto) return res.status(404).send('Producto no encontrado');

    const index = productos.indexOf(producto);
    productos.splice(index, 1);
    res.send(producto);
});

router.delete('/api/locales/:id', (req, res) => {
    const local = locales.find(c => c.id === parseInt(req.params.id));
    if (!local) return res.status(404).send('Local no encontrado');

    const index = locales.indexOf(local);
    productos.splice(index, 1);
    res.send(local);
});

module.exports = router;