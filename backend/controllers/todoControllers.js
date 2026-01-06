const Todo=require("../models/Todo");

exports.createTodo=async(req,res)=>{
    try{
        const todo=await Todo.create(req.body);
        res.json({
            success:true,
            data:todo
        });

    }catch(err){
        res.status(500).jsom({
            message:err.message
        });

    }
};

exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.json({
            success:true,
            data:todos
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};

exports.updateTodo=async(req,res)=>{
    try{
        const todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        res.json({
            success:true,
            data:todo
        });

    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};

exports.deleteTodo=async(req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.json({
            success:true,
            message:"Todo deleted"
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
};