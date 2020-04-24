const Setting = require("../models").setting;


exports.all = (req, res, next) => {
    Setting.findAll({})
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
    Setting.create({key:req.body.key,value:req.body.value })
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
    Setting.findAll({where:{id:req.params.id}})
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
    Setting.destroy({where: {id:req.params.id}})
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