const Price = require("../models").price;
const Season = require("../models").season;
const moment = require("moment");
const { Op } = require("sequelize");

exports.findPrice = async (req, res, next) => {
    const request = {
        begindate: req.query.begindate,
        enddate: req.query.enddate,
        adult: req.query.adult,
        child: req.query.child,
        childAges: req.query.childAges
    }

    const begindate = moment(request.begindate).format('YYYY-MM-DD');
    const enddate = moment(request.enddate).format('YYYY-MM-DD');
    let responseData;
    await Season.findAll({
        include: [Price]
    }).then(resp => {
        responseData= resp.map(row => {
            return row.dataValues
          });
    }).catch(err => {
            console.log(err);
     })

     responseData.forEach((item,index)=> {
     })


     var a = begindate;
     var b = enddate;

        // If you want an exclusive end date (half-open interval)
        for (var m = moment(a); m.isBefore(b); m.add(1, 'days')) {
            const queryDate = new Date(m.format('YYYY-MM-DD'));
            const aaa = responseData.filter((item)=>{return new Date(item.begindate)<=queryDate && new Date(item.enddate)>=queryDate})
            console.log(aaa);
        }

     res.send(responseData);
}