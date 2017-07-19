import DB from "../../db";

const collection = "clients";
const clientController = {
    get(req, res) {
        var db = new DB(collection)
            .then(function(){
                return db.findOne({id: req.params.id}).toArray();
            })
            .then(res.send)
            .catch(clientController.error.bind(clientController, res));
    },

    list(req, res) {
        var db = new DB(collection)
            .then(function(){
                return db.find().toArray();
            })
            .then(res.send)
            .catch(clientController.error.bind(clientController, res));
    },

    create(req, res) {
        var db = new DB(collection)
            .then(function(){
                return db.insertOne(req.body.client);
            })
            .then(function(item){
                res.send({
                    id: item.id,
                });
            })
            .catch(clientController.error.bind(clientController, res));
    },

    update(req, res) {
        var db = new DB(collection)
            .then(function(){
                return db.updateOne({id: req.params.id}, req.body.client);
            })
            .then(function(item){
                res.send({
                    id: item.id,
                });
            })
            .catch(clientController.error.bind(clientController, res));
    },

    error(res, error) {
        console.error(error);
        res.status(500);
    },
}

export default clientController;
