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

