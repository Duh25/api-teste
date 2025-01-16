const crypto = require('crypto')
const excel = require('exceljs')
const path = require('path')

exports.sendHello = async ()=>{
        return {
            status : 200,
            message : "Hello"
        }
    }

 exports.createPagination = async (page, limit, total)=>{
    return{ 
        "total": total,
        "page": page,
        "limit": limit,
        "offset": ((page - 1) * limit)
    }
 }

 exports.hashCode = async (str)=>{
    try{
        return crypto.createHash('sha256').update(str).digest('hex')
    }catch(error){
        throw error
    }
 }

exports.todayISOdate = async ()=>{
    return new Date(Date.now()).toISOString()
}

exports.toExcel = async ([data], headers)=>{
        
}