import type ISerializable from "src/interfaces/ISerializable";
import Guid from "./Guid";

export default class Player implements ISerializable {
    readonly id: string;

    name: string;

    wins: number = 0;

    losses: number = 0;

    lastGamePlayed: Date;

    readonly gamesPlayed: number = this.wins + this.losses;

    constructor(name: string, wins: number, losses: number) {
        this.wins = wins;
        this.losses = losses;
        this.name = name;
        this.lastGamePlayed = new Date();
        this.id = Guid.newGuid();
    }
}