import type ISerializable from "./ISerializable";

export default interface ISerializer<T extends ISerializable> {
     fromSerialized: (source:string, TCreator: new() => T) => T;
     toSerialized: (model: T)=> string;
}
