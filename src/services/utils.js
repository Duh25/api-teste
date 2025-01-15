exports.sendHello = async ()=>{
        return {
            status : 200,
            message : "Hello"
        }
    }

 exports.createPagination = async (page, limit, total)=>{

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 3;

    const startIndex = (page - 1) * limit;
    
    return{
        query_data: {
            startIndex,
            limit
        },
        data : {
            page,
            limit,
            total,
            
        }
    }

 }

