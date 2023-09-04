import {Request, Response} from "express";

class UserController{
    create(req:Request, res:Response){
        const {mail,password}=req.body;
    }

}

export default new UserController();