import "reflect-metadata"
import { DataSource } from "typeorm"
import { Form } from "./entity/form.entity"

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './fromni.db',
    synchronize: true,
    entities: [Form]
})
