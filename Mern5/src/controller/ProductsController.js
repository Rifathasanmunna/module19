const ProductsModel=require('../model/ProductsModel')


exports.CreateProduct=async (req,res)=>{

    try{
        let reqBody=req.body
        await ProductsModel.create(reqBody)
        return res.status(200).json({status:"success",Message:"Request Completed "})

    }catch (e){

    return res.status(200).json({err:e.toString()})
}
}


exports.ReadProduct=async (req,res)=>{
    try{
        let reqBody=req.body
          let rows= await ProductsModel.find();
        return res.status(200).json({status:"success",Message:"Request Completed",row:rows});

    }catch (e){
        //400 401 404 500 503
        return res.status(200).json({err:e.toString()})
    }


}
exports.ReadByID=async (req,res)=>{
    try{
        let {id}=req.params
        let rows= await ProductsModel.find({_id:id});
        return res.status(200).json({status:"success",Message:"Request Completed",row:rows});

    }catch (e){
        //400 401 404 500 503
        return res.status(200).json({err:e.toString()})
    }


}
exports.UpdateProduct=async(req,res)=>{
    try{

        // By ID OLD -> NEW-> Compare --> Change Column Name-CurrentValue/NewValue/Date--> Insert

        let {id}=req.params
        let reqBody=req.body;
        await ProductsModel.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}


exports.DeleteProduct=async (req,res)=>{
    try{
        let {id}=req.params
        await ProductsModel.deleteOne({_id:id});
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }


}