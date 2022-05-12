import Archive from "src/models/Archive";
import Game from "src/models/Game";
import type GameView from "src/models/GameView";
import Ranking from "src/models/Ranking";
import JSONSerializer from "src/services/JSONSerializer";
import { writable } from "svelte/store";
class MainStore {
    game = writable<Game>();
    archive = writable<Archive>();
    ranking = writable<Ranking>();

    async getGameView(id: string, archiveId: string): Promise<GameView> {
        var deserializer = new JSONSerializer<Archive>();
        let jsonString: string = localStorage.getItem(archiveId) ?? '';
        let archive = deserializer.fromSerialized<Archive>(jsonString, Archive);
        return archive.games.filter(x => x.id === id)[0].toGameView();
    }
    async getGame(id: string): Promise<Game> {
        var deserializer = new JSONSerializer<Game>();
        let jsonString: string = localStorage.getItem(id) ?? '';
        let game = deserializer.fromSerialized<Game>(jsonString, Game);
        return game;
    }
    async getArchive(archiveId: string): Promise<Archive> {
        var deserializer = new JSONSerializer<Archive>();
        let jsonString: string = localStorage.getItem(archiveId) ?? '';
        let archive = deserializer.fromSerialized<Archive>(jsonString, Archive);
        return archive;
    }

    async getRanking(rankingId: string): Promise<Ranking> {
        var deserializer = new JSONSerializer<Ranking>();
        let jsonString: string = localStorage.getItem(rankingId) ?? '';
        let ranking = deserializer.fromSerialized<Ranking>(jsonString, Ranking);
        return ranking;
    }
}

export const mainStore = new MainStore();