import { dictionary as dict } from "./DartBoardValues";
export default class Score {
    private throws: Throw[] = new Array<Throw>(3);
    addThrow(field: string) {
        let value = dict[field];
        this.throws.push({ field: field, value: value });
    }
    getScore = (): number => this.throws.reduce((a, b) => a + b.value, 0);

    editScore(newValues: string[]): void {
        this.throws = new Array<Throw>(3);
        let newVals = newValues.map(id => ({ field: id, value: dict[id] } as Throw));
        this.throws.push(...newVals);
    }
}

class Throw {
    field: string = '';
    value: number = 0;
}
