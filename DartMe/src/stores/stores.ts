import type Archive from "src/models/Archive";
import type Game from "src/models/Game";
import type Ranking from "src/models/Ranking";
import { writable } from "svelte/store";

let game = writable<Game>();
let archive = writable<Archive>();
let ranking = writable<Ranking>();


export { game, archive, ranking };