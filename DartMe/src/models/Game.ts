import type ISerializable from "src/interfaces/ISerializable";
import Guid from "./Guid";
import type Player from "./Player";
import Round from "./Round";

export default class Game implements ISerializable {

    readonly id: string = Guid.newGuid();

    private players: string[]= [];
    private rounds: Round[] = new Array<Round>();
    readonly startDate: Date = new Date(Date.now());
    private currentPlayer: string = '';
    private winner: string = '';
    constructor() {
    };

    initializeGame(): void {
        this.rounds.push(new Round(1, this.players));
        this.currentPlayer = this.getNextPlayer();

    }
    startNewRound(): void {
        this.rounds.push(this.rounds.slice(-1)[0].CreateNextRound());
    }

    registerThrow(val: string): void {

    }
    getNextPlayer(): string {
        if (this.currentPlayer == '')
            return this.players[0];
        let index = this.players.lastIndexOf(this.currentPlayer);
        if (index == -1 || index == (this.players.length - 1))
            return this.players[0];
        return this.players[index];
    }

    finishGame(winner: string): void {
        this.winner = winner;
    }

};