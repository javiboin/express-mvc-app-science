const mainController = {
    index: (req, res, next) => {
        res.render('index', { title: 'Heroes de la programación' });
    }
};

module.exports = mainController;