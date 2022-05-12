import type ISerializable from "src/interfaces/ISerializable";
import type ArchiveItem from "./ArchiveItem";
import type Player from "./Player";

export default class Archive implements ISerializable {
    games: Array<ArchiveItem> = [];
    sortDirection: string='';
    sortColumn: string='';
    readonly count: number = this.games.length;
    constructor(){
        
    }
}