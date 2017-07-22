import mongodb from "mongodb";
import config from "../config";
const MongoClient = mongodb.MongoClient;

class DB {
    constructor(collection) {
        return MongoClient.connect(config.db.url).then(function(db){
            this.db = db.collection(collection);
        });
    }
}

export default DB;
