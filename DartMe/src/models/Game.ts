import type ISerializable from "src/interfaces/ISerializable";
import type Player from "./Player";

export default class Game implements ISerializable {

    id: string;
    players: Player[];
    
};