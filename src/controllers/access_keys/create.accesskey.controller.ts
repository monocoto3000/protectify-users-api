import { Request,Response } from "express";
import createdAccessKeyService from "../../services/access_keys/create.accesskey.service";

export const createAccessKey = async (req: Request, res: Response): Promise<void> => {
    try{
        await createdAccessKeyService(req.body);
        res.status(201).json({message: 'Access key created succesfully'});
    }catch (err: any){
        res.status(400).json({message: err.message});
    }
}