import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Receita } from "../entities/Receita";
import { ReceitaTable1739321101145 } from './migrations/1739325066059-updateReceitaTable';
import { ReceitaSeeders1739323418099 } from './migrations/1739323418099-ReceitaSeeders';
import { ImagemTable1739907889330 } from './migrations/1739907889330-ImagemTable';
import { ImagemEntity } from '../entities/ImagemEntity';
import dotenv  from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOSTNAME,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    ssl:true,
    entities: [Receita, ImagemEntity],
    migrations: [ReceitaTable1739321101145,ReceitaSeeders1739323418099,ImagemTable1739907889330],
    subscribers: []
})