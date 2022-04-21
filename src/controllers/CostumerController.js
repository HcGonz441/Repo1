const Controller = {};

Controller.list = require((req, res) => {
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FRM costumer', (err,custumers)=>{
            if(err){
                res.json(err);
                
            }

        }
        )

    })


})