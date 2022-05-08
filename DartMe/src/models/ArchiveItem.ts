import type ITableItem from "src/interfaces/ITableItem";
import BaseTableItem from "./BaseTableItem";

export default class ArchiveItem extends BaseTableItem implements ITableItem {
    constructor(id: string, playersNames: string[], gameDate: Date, winner: string, gameVersion: string, throws:number) {
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
    throws: number= 0;

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
}