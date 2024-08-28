const { Router } = require("express");
const uploadConfig = require("../configs/upload");
const multer = require("multer")


const UsersController = require("../controllers/UsersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const UsersAvatarController = require("../controllers/UsersAvatarController");


const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER)

const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();


usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), usersAvatarController.update);

module.exports = usersRoutes;
