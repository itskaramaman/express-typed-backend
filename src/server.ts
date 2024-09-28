import express, {Request, Response} from "express";
import userRouter from "./routes/userRoute";

const app = express();


app.get("/", (req:Request, res:Response)=>{
    res.status(200).send(`<h1>Hello World</h1>`);
})

app.use("/api/v1/users", userRouter);

app.listen(5000, ()=>console.log(`Server running on port 5000;`))
