import {Router} from "express";
import {signUp,signIn} from "../controllers/auth";
import {testRoute} from "../controllers/test";
const authRouter = Router();
authRouter.post("/signup",signUp);
authRouter.post("/signIn",signIn);
authRouter.get("/",testRoute);
 export default authRouter;
