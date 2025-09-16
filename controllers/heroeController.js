const scienceData = require('../db/science.js');

const heroeController = {
    index:(req, res, next) => {
        res.render('heroes/list', { title: 'Heroes de la programación', data : scienceData.lista });
    },
    showDetail: (req, res, next) => {
        id = req.params.id;
        heroe = scienceData.lista.find(h => h.id == id);

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
        heroe = scienceData.lista.find(h => h.id == id);
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