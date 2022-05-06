import type ISerializable from "src/interfaces/ISerializable";
import Guid from "./Guid";
import type Player from "./Player";
import type Round from "./Round";

export default class Game implements ISerializable {

    readonly id: string;
    private players: Player[];
    private rounds: Round[];
    readonly startDate: Date;
    private winner: string = '';
    constructor(players: Player[]) {
        this.id = Guid.newGuid();
        this.players = players;
        this.startDate = new Date(Date.now());
        this.rounds = new Array<Round>();
    };
};