const {salesReportBydate, salesReportByPointSale, sal, salesReportByStatus} = require('../services/reportService')

exports.reportByDate = async (req, res)=>{
    try{
        const {status, message} = await salesReportBydate(req.body)
        res.status(status).json(message)
    }catch(error){
        res.status(400).json(error.message)
    }
}

exports.reportByPointSale = async (req, res)=>{
    try{
        const {status, message} = await salesReportByPointSale(req.body)
        res.status(status).json(message)
    }catch(error){
        res.status(400).json(error.message)
    }
}

exports.reportByStatus = async (req,res) => {
    try{
        const {status, message } = await salesReportByStatus(req.body)
        res.status(status).json(message)
    }catch(error){
        res.status(400).json(error.message)
    }
}