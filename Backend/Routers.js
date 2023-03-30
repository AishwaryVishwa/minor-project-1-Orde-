const express =require('express')
const {orderModel} =require('./DATABASE/dishSchema')
const {userModel}=require('./DATABASE/dishSchema')
const bcrypt=require('bcryptjs')
const Router=express.Router();
const {emailSender}=require('./Email');
const authenticate = require('./Middleware/authenticate');
const jsonc = require('jsonc');
const { orderdoneEmailSender } = require('./orderdoneEmail');
require('./DATABASE/dbConnection')

Router.post('/payment',async (req,res)=>{
    const {cname,cemail,TableNum,order,bill,date,time}=req.body;
  // checking if cart is empty of not
    try {
        
        if(order.length>0)
        {
            const order=new orderModel(req.body)
            await order.save()
            // .then(()=>{
            //     console.log('order saved');
            // })
            // .catch((err)=>{
            //     console.log(err);
            // })
            res.send({message:"order is placed"})
        }
        else{
            res.send({message:"please fill the cart first"})
        }
    } catch (error) {
        console.log(error);
        
    }
})

Router.post('/orderisdone', async(req,res)=>{
    try{
        console.log(req.body);
        orderdoneEmailSender(req.body)
        await orderModel.findByIdAndDelete(req.body._id)
        res.send({message:'order is done'})
    }
    catch(err)
    {
        console.log(err);
        res.send(err)
    }
})

Router.post('/register',async (req,res)=>{
    const {name,email,password}=req.body;

    try{

        const isPresent=await userModel.findOne({email:email})
        
        if(isPresent)
        {
            res.status(404).send({message:'user already registered'})
            console.log('user already registered');
        }else{
            const user=new userModel(req.body);
            await user.save();
            res.status(200).send({message:'user is registered'})
            // console.log('user registered');
        }
    }catch(err)
    {
        res.status(404).send({error:"some error occured"})
    }

})

Router.post('/login',async (req,res)=>{
   
    try{

    const {email,password}=req.body;
    if(!email || !password)
    {
        return res.status(400).send({error:"please fill the data"})
    }
        const user=await userModel.findOne({email:email})
        if(user){
            const isMatch=await bcrypt.compare(password,user.password);
            const token=await user.generateAuth();
            if(isMatch)
            {
                res.cookie('jwtoken',token,{
                    httpOnly:true
                })
                console.log(token);
                console.log(user.name," logined successful");
                res.status(200).send({message:"user logined"})
            }else
            {
                console.log('wrong credentials');
                res.status(404).send({message:"wrong credentials"})
            }
        }
        else
        {
            console.log('no account for that email');
            res.status(404).send({message:"user with this emai is not found"})
        }
    }
    catch(err)
    {
           res.status(404).send({error:err})
    }


})
Router.get('/',(req,res)=>{
    res.send('Home page')
})

Router.get('/analysis',authenticate,(req,res)=>{
    console.log('auth entered');
//    const data= jsonc.stringify(req.user);
    // console.log(req.user);
    res.send(req.user)
})


Router.get('/getOrderList',async (req,res)=>{
    console.log('entered get order list');
    console.log(req.query.date);
   try {
    

       const list=await orderModel.find({date:req.query.date})
       if(list.length===0)
       {
        console.log('no order today')
       }
       console.log(list);
        res.send(list);
   } catch (error) {
       console.log(error);
       res.send(error)
   }
})

module.exports=Router