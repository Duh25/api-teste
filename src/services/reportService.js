
exports.salesReport = async (req, res) =>{
    try{
       let data = (await findAll())
       
       let path = await toExcel(data, headers)

       res.status(200).json({message: "OK"})
    }catch(error){
        res.status(400).json(error.message)
    }
}
