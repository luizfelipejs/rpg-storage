import { Router } from 'express';
import userController from './controllers/userController';
import adventureController from './controllers/adventureController';
import authController from './controllers/authController.js'
import verifyToken from './middlewares/verify';

const routes = Router();

// - User Routes 
routes.post("/user", userController.create)
routes.get("/user/:id", userController.index)

// - auth Routes 
routes.post("/login", authController.login)

// - adventure routes 
routes.get("/list-adventures", adventureController.list);
routes.get("/adventure/:id", adventureController.index)

// Protected routes 
routes.use(verifyToken);

routes.post("/adventure", adventureController.create);
routes.delete("/adventure/:id", adventureController.delete);
routes.put("/adventure/:id", adventureController.update);

export default routes;