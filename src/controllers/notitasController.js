let db = require("../database/models");

module.exports = {

    index: (req, res)=>{
        db.Nota.findAll().then((result)=>{
            //res.send(result);
            res.render("index", {notas: result});
        })
    },

    edit: (req, res)=>{
        let id = req.params.id;
        if(!id){
            res.send("No maistro. Así no...");
        }

        db.Nota.findAll({
            where: {
              id: id
            }
          }).then((result)=>{
            console.log(result);
            res.render("detail", {nota: result});
        });
    },

    editSave: (req, res)=>{
        let id = req.params.id;
        if(!id){
            res.send("No maistro. Así no...");
        }

        let {title, message} = req.body;
        if(!title || !message){
            res.send("No maistro. Así no...");
        }

        db.Nota.update({
                titulo: title,
                texto: message
            },{
            where:{
                    id: id  
                }
            }    
        ).then(()=>{
            res.redirect("/");
        })
        .catch(error=>{
            res.send("Rompiose algo:" + error.toString());
        });
    },

    create: (req, res)=>{
        let {title, message} = req.body;
        if(!title || !message){
            res.send("No maistro. Así no...");
        }

        db.Nota.create({
            titulo: title,
            texto: message
        })
        .then(()=>{
            res.redirect("/");
        })
        .catch(error=>{
            res.send("Rompiose algo:" + error.toString());
        });
    },

    delete: (req, res)=>{
        let id = req.params.id;
        if(!id){
            res.send("No maistro. Así no...");
        }
       
        db.Nota.destroy( {
            where: { id: id}
        })
        .then(()=>{
            res.redirect("/");
        })
        .catch(error=>{
            res.send("Rompiose algo:" + error.toString());
        });
    }

}