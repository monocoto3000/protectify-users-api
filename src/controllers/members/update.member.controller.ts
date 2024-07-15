import { Request,Response } from "express";
import updateMemberService from "../../services/member/update.member.service";

export const updateMember = async (req:Request,res:Response): Promise<void> => {
    try{
        await updateMemberService(req.body,parseInt(req.params.id,10));
        res.status(200).json({message:"Member updated successfully"});
    }catch(err:any){
        res.status(400).json({messsage:err.message});
    }
}