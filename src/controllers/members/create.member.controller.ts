import { Request,Response } from "express";
import createdMemberService from "../../services/member/create.member.service";

export const createMember = async (req: any, res: Response): Promise<void> => {
    try{
        await createdMemberService(req.body, req.user.id);
        res.status(201).json({message: 'Access key created succesfully'});
    }catch (err: any){
        res.status(400).json({message: err.message});
    }
}