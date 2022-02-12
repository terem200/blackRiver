import BaseController from "./BaseController";
import {General} from "../namespace/General";
import {NMongoController} from "../namespace/controller/NMongoController";
import {AssertionError} from "assert";


export default class MongoController<T extends Record<string, unknown>> extends BaseController{
    private readonly rootPath : string;

    private readonly collection: string

    constructor(options : General.TControllerOptions, collection: string) {
        super(options);
        this.rootPath = "/mongo"
        this.collection = collection
    }

    public async getRecords(query : NMongoController.TQuery<T>) : Promise<General.TResponse<{data: T[]}>>{
        const response = await this
            .body<NMongoController.TGetRecordsBody<T>>({
                query,
                collection: this.collection
            })
            .post<{data: T[]}>(`${this.rootPath}/${this.collection}`)

        return response
    }


    public async shouldBeOneRecord(query : NMongoController.TQuery<T>): Promise<General.TResponse<{data: T[]}>>{
        const response = await this.getRecords(query)
        if(response.body.data.length !== 1){
            throw new AssertionError({
                message: "Expected 1 record should exist",
                expected: 1,
                actual: response.body.data.length
            })
        }
        return response
    }
}