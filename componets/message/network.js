const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/',async function(req,res){
    try{
        const fullMessage = await controller.getMessages();
        response.success(req,res,fullMessage,200);
    }catch(e){
        response.error(req,res,'unexpected error',500,e);
    }
});
router.get('/:func/:id',function(req,res){
    console.log(req.query);
    console.log(req.params);
    res.send("mensajes query recivida...");
});
router.post('/',async function(req,res){
    try{
        const {id,msg} = req.body;
        const fullMessage = await controller.addMessage(id,msg);
        response.success(req,res,fullMessage,201)
    }catch(e){
        response.error(req,res,'params invalid',400,'error in params')
    }
});
router.delete('/',(req,res)=>{
    response.success(req,res,'message deleted',200);
});

module.exports = router;