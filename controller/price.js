const Price = require("../models").price;


exports.all = (req, res, next) => {
    Price.findAll({})
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
    Price.create({roomid:req.body.roomid,seasonid:req.body.seasonid,price:req.body.price,marketid:req.body.marketid,adult:req.body.adult,child:req.body.child })
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
    Price.findAll({where:{id:req.params.id}})
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
    Price.destroy({where: {id:req.params.id}})
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