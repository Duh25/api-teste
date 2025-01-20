const sendHello = require('../services/utils')
const {findAll} = require('../services/orderService')
const {toHeaders, toExcel} = require('../services/utils')

const headers = [
    { header: 'ID', key: 'id', width: 20 },
    { header: 'Data da Venda', key: 'dateOfSale', width: 20 },
    { header: 'ID Pedido Marketplace', key: 'orderId', width: 25 },
    { header: 'Nome do Comprador', key: 'customer_name', width: 25 },
    { header: 'Store', key: 'store', width: 20 },
    { header: 'Valor do frete (R$)', key: 'shipmentValue', width: 25 },
    { header: 'Valor Descontos (R$)', key: 'discount', width: 25 },
    { header: 'Valor Total da Venda (R$)', key: 'total', width: 25 }
]


exports.getHello = async (req, res) =>{
    try{
       let data = (await findAll())
       
       let path = await toExcel(data, headers)

       res.status(200).json({message: "OK"})
    }catch(error){
        res.status(400).json(error.message)
    }
}
