import type ISerializable from "src/interfaces/ISerializable";
import type ISerializer from "src/interfaces/ISerializer";

export default class JSONSerializer<T extends ISerializable> implements ISerializer<T> 
{
    fromSerialized<T>(source: string, TCreator: new() => T): T
    {
        let model : T = Object.assign(new TCreator(), JSON.parse(source));
        return model;
    }
    toSerialized<T> (model: T): string 
    {
            return JSON.stringify(model);
    }

}