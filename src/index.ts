import express  from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"

AppDataSource.initialize().then(() => {
    const app = express()
    
    app.use(express.json())

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

    app.use(routes)

    return app.listen(process.env.PORT)
})