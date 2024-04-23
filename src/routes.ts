import { Router } from "express";
import { SubjectController } from "./controllers/SubjectController";
import { RoomController } from "./controllers/RoomController";
const routes = Router()
/**
 * @openapi
 * /:
 *  get:
 *  description: 
 *  responses:
*/ 
routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.get('/room', new RoomController().list)
routes.get('/room/:idRoom', new RoomController().listOne)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
export default routes