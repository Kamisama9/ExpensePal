const ExpenseSchema=require('../models/expenseModel')

exports.addExpense=async(req,res)=>{
    const {title,amount,category,description,date}=req.body

    const expense=ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })
    try {
        if(!title||!category||!description||!date)
            return res.status(400).json({message:"All fields must be filled"})
        if(amount<=0||!amount==='number')
            return res.status(400).json({message:'Amount must be postive'})
        await expense.save()
        res.status(200).json({message:"expense Added"})
    } catch (error) {
        res.status(500).json({message:'Server Error'})
    }
}

exports.getExpense=async(req,res)=>{
    try{
        const expenses=await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(expenses)
    }
    catch (err)
    {
        res.status(500).json({message:'Server Error'})
    }
}

exports.deleteExpense=async(req,res)=>{
    const {id}=req.params
    try{
        await ExpenseSchema.findByIdAndDelete(id)
        res.status(200).json({message:"Expense Deleted"})
    }
    catch (err)
    {
        res.status(500).json({message:'Server Error'})
    }
}