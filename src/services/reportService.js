const {findByDate, find, findAllDocuments} = require("../services/orderService")
const {toExcel} = require("./utils")

const headers = [
    { header: 'ID', key: 'id', width: 20 },
    { header: 'Data da Venda', key: 'dateOfSale', width: 20 },
    { header: 'ID Pedido Marketplace', key: 'orderId', width: 25 },
    { header: 'Nome do Comprador', key: 'customer_name', width: 25 },
    { header: 'Store', key: 'store', width: 20 },
    { header: 'Point Sale', key: 'pointSale', width: 40 },
    { header: 'Status', key: 'status', width: 30 },
    { header: 'Valor do frete (R$)', key: 'shipmentValue', width: 25 },
    { header: 'Valor Descontos (R$)', key: 'discount', width: 25 },
    { header: 'Valor Total da Venda (R$)', key: 'total', width: 25 }
]

exports.salesReportBydate = async (body) =>{
    try{
       let data = (await findByDate(body)).message    
       
       let path = await reportCreate(data.data)
        
       return{
            status: 200,
            message: path
       }
    }catch(error){
       throw error
    }
}

exports.salesReportByPointSale = async (body)=>{
    const {pointsale} = body
    const filter = {
        pointSale: pointsale
    }
    try{
        let data = await (findAllDocuments(filter))
            

        let path = await reportCreate(data.message.data)

        return{
            status: 200,
            message: path
        }
    }catch(error){
        throw error
    }
}

exports.salesReportByStatus = async (body)=>{
    const {status} = body
    const filter = {
        status: status
    }

    try{
        let data = await (findAllDocuments(filter))

        let path = await reportCreate(data.message.data)

        return{
            status: 200,
            message: path
        }
    }catch(error){
        throw error
    }
}


const reportCreate = async (data) =>{
    try{
        if(data != null){
            return path = await toExcel(data, headers)
        }
    }catch(error){
        throw error
    }
}