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

 exports.hashCode = (str)=>{

    try{
        return crypto.createHash('sha256').update(toString(str)).digest('hex')
    }catch(error){
        throw error
    }
 }

exports.todayISOdate = ()=>{
    return new Date(Date.now()).toISOString()
}

exports.toExcel = async (data, headers)=>{
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('test');
    worksheet.columns = headers

    data.forEach((i)=>{
        data[i] = normalizeObj(i)
    })
    
    data.forEach(element => {
        worksheet.addRow(element)
    });

    const filePath = path.resolve('C:\\Users\\User\\Documents\\Eduardo\\api\\resources', `${Date.now()}.xls`)

    try{
        await workbook.xlsx.writeFile(filePath)
    }catch(error){
        throw error
    }  
    
    return filePath
}

const normalizeObj = (obj)=>{
    obj["customer_name"] = obj.customer.name
    return obj
}

const toString = (str)=>{
    return str+""
}
