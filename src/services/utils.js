const crypto = require('crypto')
const { on } = require('events')
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

exports.toExcel = async (data, headers, path)=>{
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('test');
    worksheet.columns = headers

    data.forEach((i)=>{
        data[i] = test(i)
    })
    
    data.forEach(element => {
        worksheet.addRow(element)
    });

    const filePath = path.resolve(path, `${Date.now()}-plan.xls`)

    try{
        await workbook.xlsx.writeFile(filePath)
    }catch(error){
        throw error
    }  
    
    return filePath
}

const test = (obj)=>{
    obj["customer_name"] = obj.customer.name
    return obj
}
