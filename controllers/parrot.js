var parrot = require('../models/parrot');
// List of all parrots
exports.parrot_list = function(req, res) {
res.send('NOT IMPLEMENTED: parrot list');
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