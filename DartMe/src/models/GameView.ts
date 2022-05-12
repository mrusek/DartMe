import type Serializable from "src/interfaces/ISerializable";
import type Score from "./Score";

export default class GameView {
    private id: string;
    players: string[];
    scores: Map<string, Score>;
    gameDate: Date;
    winner: string;
    getId = (): string => this.id;
    gameType: string;

    getPlayersString(): string {
        return this.players.join('\r\n');
    }

    constructor(id: string, players: string[], scores: Map<string, Score>, gameDate: Date, winner: string, gameType: string) {
        this.id = id;
        this.players = players;
        this.scores = scores;
        this.gameDate = gameDate;
        this.winner = winner;
        this.gameType = gameType;
    }
}