import { Request,Response } from "express";
import deleteMemberService from "../../services/member/delete.member.service";

export const deleteMember = async (req: Request, res: Response): Promise<void> => {
    try{
        let memberId = parseInt(req.params.id, 10);
        await deleteMemberService(memberId);
        res.status(200).json({message: 'Member deleted succesfully'});
    }catch (err: any){
        res.status(400).json({message: err.message});
    }
}