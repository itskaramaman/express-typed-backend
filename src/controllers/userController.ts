import { Request, Response } from "express"

export const getAllUsers = async (req:Request, res:Response) => {
    try {
        res.status(200).json({message: "Success", data: ["user1", "user2", "user3", "user4", 
            "user5"
        ]})
    } catch (error) {
        res.status(500).json({message: "failed", error})
    }
}

