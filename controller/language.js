const Language = require("../models").language;


exports.all = (req, res, next) => {
    Language.findAll({})
    .then(resp=> {
        const responseData = {
            data: resp,
            success: true,
            error: false
        };
        res.send(responseData);
    })
    .catch(err=> {
        const responseData = {
            data: err,
            success: false,
            error: true
        };
        res.send(responseData);  
    })
}

exports.create = (req, res, next) => {
    Language.create({code:req.body.code,name:req.body.name })
    .then(resp => {
        const responseData = {
            data: resp,
            success: true,
            error: false
        };
        res.send(responseData);  
    }).catch(err=> {
        const responseData = {
            data: err,
            success: false,
            error: true
        };
        res.send(responseData);  
    });
}

exports.getById = (req, res, next) => {
    Language.findAll({where:{id:req.params.id}})
    .then(resp=> {
        const responseData = {
            data: resp,
            success: true,
            error: false
        };
        res.send(responseData);
    })
    .catch(err=> {
        const responseData = {
            data: err,
            success: false,
            error: true
        };
        res.send(responseData);  
    })
}
exports.remove = (req, res, next) => {
    Language.destroy({where: {id:req.params.id}})
    .then(resp=> {
        const responseData = {
            data: resp,
            success: true,
            error: false
        };
        res.send(responseData);
    }).catch(err=> {
        const responseData = {
            data: err,
            success: false,
            error: true
        };
        res.send(responseData); 
    })
}