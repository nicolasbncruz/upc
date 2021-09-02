module.exports = app => {
    app.get('/api/project/GetProjects', (req, res) => {
        var data = require('../json/projects.json');
        res.json(data);
    })

    app.get('/api/apartment/GetApartments', (req, res) => {
        var data = require('../json/apartment.json');
        res.json(data);
    })

    app.get('/api/persons', (req, res) => {
        var data = require('../json/person.json');
        res.json(data);
    })

    app.get('/api/comments', (req, res) => {
        var data = require('../json/comment.json');
        res.json(data);
    })

    app.get('/api/services', (req, res) => {
        var data = require('../json/service.json');
        res.json(data);
    })

    app.get('/api/projects', (req, res) => {
        var data = require('../json/project.json');
        res.json(data);
    })


    app.get('/api/clientes', (req, res) => {
        var data = require('../json/cliente.json');
        res.json(data);
    })

    app.get('/api/companies', (req, res) => {
        var data = require('../json/company.json');
        res.json(data);
    })
}