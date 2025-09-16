const scienceData = require('../db/science.js');

const heroeController = {
    index:(req, res, next) => {
        res.render('heroes', { title: 'Heroes', data : scienceData.lista });
    },
    showDetail: (req, res, next) => {
        res.render('heroes', { title: 'Heroes', data : scienceData.lista });
    },
    showBio: (req, res, next) => {
        res.render('heroes', { title: 'Heroes', data : scienceData.lista });
    }
}

module.exports = heroeController;