import {Router} from "express";
const contentRouter = Router();
import {createContent} from "../controllers/createcontent";
import {userMiddleware} from "../middleware/authMiddleware";

contentRouter.post("/create",userMiddleware,createContent);
export default contentRouter;