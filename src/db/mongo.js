"use strict";

import mongodb from "mongodb";
import config from "../../config";
const Client = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const mongo = {
    client: Client,
    objectID: ObjectID,
    connect: function() {
        return mongo.client.connect(config.db.host).then(function(db) {
            mongo.db = db;
        });
    },
    collection: function(collectionName) {
        return mongo.db.collection(collectionName);
    },
    close: function() {
        return mongo.db.close();
    },
};

export default mongo;
