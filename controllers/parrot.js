var parrot = require('../models/parrot');
// List of all parrot
exports.parrot_list = async function(req, res) {
    try{
    parrot = await parrot.find();
    res.send(parrot);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific parrot.
exports.parrot_detail = function(req, res) {
res.send('NOT IMPLEMENTED: parrot detail: ' + req.params.id);
};
// Handle parrot create on POST.
exports.parrot_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: parrot create POST');
};
// Handle parrot delete form on DELETE.
exports.parrot_delete = function(req, res) {
res.send('NOT IMPLEMENTED: parrot delete DELETE ' + req.params.id);
};
// Handle parrot update form on PUT.
exports.parrot_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: parrot update PUT' + req.params.id);
};

// Handle a show all view
exports.parrot_view_all_Page = async function(req, res) {
    try{
    theparrots = await parrot.find();
    res.render('parrot', { title: 'parrot Search Results', results: theparrots });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };