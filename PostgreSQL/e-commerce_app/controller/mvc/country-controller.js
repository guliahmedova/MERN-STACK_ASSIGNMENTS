const getCountryView = async (req, res) => { 
    res.render('country/index');
};

module.exports = {
    getCountryView
};