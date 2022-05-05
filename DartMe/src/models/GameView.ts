import type Serializable from "src/interfaces/ISerializable";
import type Player from "./Player";

export default class GameView implements Serializable {
    private id: string;
    players: Player[];
    scores: Map<string, number[]>;
    gameDate: Date;
    winner: string;
    getId = (): string => this.id;

    constructor(id: string, players: Player[], scores: Map<string, number[]>, gameDate: Date, winner: string) {
        this.id = id;
        this.players = players;
        this.scores = scores;
        this.gameDate = gameDate;
        this.winner = winner;
    }
}