import type ISerializable from "src/interfaces/ISerializable";
import type Player from "./Player";

export default class Ranking implements ISerializable {
    players: Array<Player> = [];
    sortDirection: string;
    sortColumn: string;
    readonly count: number = this.players.length;
    constructor(players: Array<Player>, sortDir: string, sortCol: string) {
        this.players = players;
        this.sortColumn = sortCol;
        this.sortDirection = sortDir;
    }
}