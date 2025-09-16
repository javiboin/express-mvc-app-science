const scienceData = require('../db/science.js');

function obtenerIdYNombre(array) {
    return array.map(heroe => ({
        id: heroe.id,
        nombre: heroe.nombre
    }))
}

function buscarHeroe(idHeroe) {
    return scienceData.lista.find(h => h.id == idHeroe);
}

const lista = obtenerIdYNombre(scienceData.lista);

const heroeController = {
    index:(req, res, next) => {
        res.render('heroes/list', { 
            title: 'Heroes de la programación', 
            data : lista });
    },
    showDetail: (req, res, next) => {
        id = req.params.id;
        heroe = buscarHeroe(id);

        if (!heroe) {
            return res.status(404).send('No encontramos al científico indicado. Por favor, elija otro id');
        }

        return res.render('heroes/detail', { 
            title: 'Heroes de la programación', 
            id: heroe.id,
            nombre : heroe.nombre, 
            profesion: heroe.profesion,
            foto: heroe.foto,
        });
    },
    showBio: (req, res, next) => {
        id = req.params.id;
        heroe = buscarHeroe(id);
        isOk = req.params.ok;

        if (!heroe) {
            return res.status(404).send('No encontramos al científico indicado. Por favor, elija otro id');
        } else if (!isOk) {
            return res.send(`Lamento que no desees saber más de ${heroe.nombre}. <a href="/heroes/detalle/id/${heroe.id}">Volver al incio</a>`);
        } else {
            return res.render('heroes/bio', { 
                title: 'Heroes de la programación', 
                nombre : heroe.nombre, 
                bio: heroe.resenia,
                foto: heroe.foto,
                pais: heroe.pais,
                icono: heroe.icono
            });
        }
    }
}

module.exports = heroeController;