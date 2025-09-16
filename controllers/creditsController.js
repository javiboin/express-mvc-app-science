const creditsController = {
    index: (req, res, next) => {
        res.send('Estos son los agradecimientos de la página');
    }
};

module.exports = creditsController;