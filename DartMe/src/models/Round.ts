import type Player from "./Player";
import type Score from "./Score";

export default class Round {
    //TODO
    //TODO
    roundNumber: number;
    players: Player[];
    scores: Map<Player, Score>;
}