const sql=require('mssql')

let connection = async () => {
    // try {
    //     //    return await sql.connect('mssql://sp:8766ChiconY5858@172.28.5.203/sp')

    // } catch (err) {

    // }
    return new Promise((resovle,reject)=>{
        sql.connect('mssql://sp:8766ChiconY5858@172.28.5.203/sp')
        .then(res=>{
            resovle(res)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

module.exports = connection;