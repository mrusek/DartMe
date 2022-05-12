import type ITableItem from "src/interfaces/ITableItem";
import BaseTableItem from "./BaseTableItem";
import GameView from "./GameView";
import type Score from "./Score";

export default class ArchiveItem extends BaseTableItem implements ITableItem {
    constructor(id: string, playersNames: string[], gameDate: Date, winner: string, gameVersion: string, throws: number) {
        super();
        this.id = id;
        this.playersNames = playersNames;
        this.gameDate = gameDate;
        this.winner = winner;
        this.gameVersion = gameVersion;
        this.throws = throws;
    };
    readonly id: string = '';
    playersNames: Array<string> = new Array<string>();
    gameDate: Date = new Date();
    winner: string = '';
    gameVersion: string = '';
    scores: Map<string, Score> = new Map<string, Score>();
    readonly throws: number = [...this.scores.values()].map(x => x.getScore()).reduce((a, b) => { return Math.max(a, b) });

    getCols(): Map<string, string> {
        let map = new Map<string, string>();
        map.set(this.nameof(() => this.id), this.id);
        map.set(this.nameof(() => this.playersNames), this.getplayersNames());
        map.set(this.nameof(() => this.gameDate), this.gameDate.toDateString());
        map.set(this.nameof(() => this.winner), this.winner);
        map.set(this.nameof(() => this.gameVersion), this.gameVersion);
        map.set(this.nameof(() => this.throws), this.throws.toString());
        return map;
    };

    getplayersNames(): string {
        return this.playersNames.length > 4 ?
            this.playersNames.slice(0, 3).concat(new Array('...')).join(',')
            : this.playersNames.join(',');
    }

    toGameView(): GameView {
        return new GameView(this.id, this.playersNames, this.scores, this.gameDate, this.winner, this.gameVersion);
    }
}