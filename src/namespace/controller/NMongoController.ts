 export namespace NMongoController {
    export type TQuery<T extends Record<string, unknown>> = Partial<T>

    export type TGetRecordsBody<T extends Record<string, unknown>> = {
        collection: string,
        query: TQuery<T>
    }
 }