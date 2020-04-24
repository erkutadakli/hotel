const LanguageItem = require("../models").languageitem;


exports.all = (req, res, next) => {
    LanguageItem.findAll({})
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
    LanguageItem.create({tableid:req.body.tableid,key:req.body.key, value:req.body.value,langcode:req.body.langcode})
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
    LanguageItem.findAll({where:{id:req.params.id}})
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
    LanguageItem.destroy({where: {id:req.params.id}})
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