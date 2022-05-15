import type ISerializable from "src/interfaces/ISerializable";
import type ITableItem from "src/interfaces/ITableItem";
import BaseTableItem from "./BaseTableItem";
import Guid from "./Guid";

export default class Player extends BaseTableItem implements ITableItem {
    readonly id: string;

    name: string;

    wins: number = 0;

    losses: number = 0;

    lastGamePlayed: Date;

    readonly gamesPlayed: number = this.wins + this.losses;

    constructor(name: string, wins: number, losses: number) {
        super();
        this.wins = wins;
        this.losses = losses;
        this.name = name;
        this.lastGamePlayed = new Date();
        this.id = Guid.newGuid();
    }
    getCols(): Map<string, string> {
        let map = new Map<string, string>();
        map.set(this.nameof(() => this.id), this.id);
        map.set(this.nameof(() => this.name), this.name);
        map.set(this.nameof(() => this.gamesPlayed), this.gamesPlayed.toString());
        map.set(this.nameof(() => this.wins), this.wins.toString());
        map.set(this.nameof(() => this.losses), this.losses.toString());
        map.set(this.nameof(() => this.lastGamePlayed), this.lastGamePlayed.toDateString());
        return map;
    }
}