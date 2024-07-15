import { Request,Response } from "express";
import getAllMemberService from "../../services/member/getAll.member.service";
export const getAllMember = async (req: Request, res: Response): Promise<void> => {
    try{
        let members = await getAllMemberService();
        res.status(200).json(members);
    }catch (err: any){
        res.status(400).json({message: err.message});
    }
}