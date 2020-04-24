const Room = require("../models").room;


exports.all = (req, res, next) => {
    Room.findAll({})
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
    Room.create({status:req.body.status,capacity:req.body.capacity })
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
    Room.findAll({where:{id:req.params.id}})
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
    Room.destroy({where: {id:req.params.id}})
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