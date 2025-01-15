exports.sendHello = async ()=>{
        return {
            status : 200,
            message : "Hello"
        }
    }

 exports.createPagination = async (page, limit)=>{
    return{ 
        "total": undefined,
        "page": page,
        "limit": limit,
        "offset": ((page - 1) * limit)
    }

 }

