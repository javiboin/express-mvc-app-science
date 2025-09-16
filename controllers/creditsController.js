const creditsController = {
    index: (req, res, next) => {
        res.render('credits', { title: 'Créditos' });
    }
};

module.exports = creditsController;