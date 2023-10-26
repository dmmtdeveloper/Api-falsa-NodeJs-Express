import express from "express";
import * as controller from "../controller/productController.js";
const router = express.Router();

router.get("/api/users/new", controller.getNewUser);
router.get("/api/companies/new", controller.getNewCompany);
router.get("/api/user/company", controller.getNewUserCompany);

export { router };
