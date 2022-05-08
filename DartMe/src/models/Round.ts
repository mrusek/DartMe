import type Player from "./Player";
import Score from "./Score";

export default class Round {
    readonly roundNumber: number;
    readonly players: string[];
    private scores: Map<string, Score> = new Map<string, Score>();
    constructor(roundNumber: number, players: string[]) {
        this.roundNumber = roundNumber;
        this.players = players;
    }

    getPlayerScore(id: string): Score | undefined {
        if (this.scores.has(id))
            return this.scores.get(id);
        else {
            var score = new Score();
            this.scores.set(id, score);
            return score;

        }
    }

    CreateNextRound(): Round {
         return Object.assign(new Round(this.roundNumber + 1, this.players), this);
    }

}