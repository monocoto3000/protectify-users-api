import { Request,Response } from "express";
import getByIdMemberService from "../../services/member/getById.member.service";

export const getByIdMember = async (req:Request,res:Response):Promise<void> => {
    try{
        let memberId = parseInt(req.params.id, 10);
        const member = await getByIdMemberService(memberId);
         if (member) {
            res.status(200).json(member);
        } else {
         res.status(404).json({ message: 'Member not found' });
         }
    }catch (err: any){
        res.status(400).json({message: err.message});
    }
}