import Config from "src/models/Config";
import JSONSerializer from "./JSONSerializer";

export default function fetchConfigPromise(): Promise<Config> {
    let jsonDeserializer = new JSONSerializer<Config>();
    let fetchConfigJson = fetch("assets/config.json")
        .then((res) => res.json())
        .then((resp) => jsonDeserializer.fromSerialized(String(resp), Config));
    return fetchConfigJson;
}