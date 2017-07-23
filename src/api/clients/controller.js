import db from "../../db/mongo";

const COLLECTION = "clients";
const clientController = {
    get(req, res) {
        return db.collection(COLLECTION).findOne({_id: db.objectID(req.params.id)}).toArray()
            .then(res.send)
            .catch(clientController.error.bind(clientController, res));
    },

    list(req, res) {
        return db.collection(COLLECTION).find().limit(10).toArray()
            .then((results) => {
                let byId = {};
                results.forEach((result) => {
                    byId[result._id] = result;
                })
                res.send(byId);
            })
            .catch(clientController.error.bind(clientController, res));
    },

    create(req, res) {
        return db.collection(COLLECTION).insertOne(req.body)
            .then(function(item){
                res.send({
                    id: item.insertedId,
                });
            })
            .catch(clientController.error.bind(clientController, res));
    },

    update(req, res) {
        return db.collection(COLLECTION).updateOne({_id: db.objectID(req.params.id)}, req.body.client)
            .then(function(){
                res.status(200);
            })
            .catch(clientController.error.bind(clientController, res));
    },

    error(res, error) {
        console.error(error);
        res.status(500);
    },
}

export default clientController;
