let app = require('./server.js');


module.exports = {

    getAllUsers: function(req, res, next){
        const db = req.app.get('db');
            db.get_users()
            .then(function(users){
                res.status(200).send(users)
            })
            .catch( (err) => res.status(500).send(err))
        },
    getAllVehicles: function(req, res, next){
        const db = req.app.get('db');
            db.get_vehicles()
            .then(function(vehicles){
                res.status(200).send(vehicles)
            })
            .catch( (err) => res.status(500).send(err))
        },
    addUser: function(req, res, next){
        const db = req.app.get('db');
        let newUser = req.body;
        db.add_user().then([newUser.id, newUser.name, newUser.email], function(users){
            console.log(err);
            res.status(200).send(users)
            })
            .catch( (err) => res.status(500).send(err))
        },
    addVehicle: function(req, res, next){
        const db = req.app.get('db');
        let newVehicle = req.body;
        db.add_vehicle().then([newVehicle.id, newVehicle.make, newVehicle.model, newVehicle.year, newVehicle.owner_id], function(users){
            console.log(err);
            res.status(200).send(vehicles);
            })
            .catch( (err) => res.status(500).send(err))
        },
    getVehicleCountByUserId: function(req, res, next){
        const db = req.app.get('db');
        let id = req.params.userId;
        db.vehicle_count()
        .then([id], function(result){
            console.log(result)
            res.status(200).send({count: result});
        })
        .catch( (err) => res.status(500).send(err))
    },
    getVehicleByUserId: function(req, res, next){
        const db = req.app.get('db');
        let id = req.params.userId;
        db.vehicle_by_userid().then([id], function(result){
            res.status(200).send(result)
        })
        .catch( (err) => res.status(500).send(err))
    },
    getVehicleByUserEmail: function(req, res, next){
        const db = req.app.get('db');
        let email = req.query.userEmail;
        let firstStart = req.query.userFirstStart;

        if(email){
            db.vehicle_by_email().then([email], function(result){
                res.status(200).send(result);
            })
            .catch( (err) => res.status(500).send(err))
        } else if(firstStart){
            db.vehicle_by_first().then([firstStart+'%'], function(result){
                res.status(200).send(result);
            })
            .catch( (err) => res.status(500).send(err))
        }
        
    },
    getVehiclesByYear: function(req, res, next){
        const db = req.app.get('db');
        db.vehicles_by_year().then(function(vehicles){
                res.status(200).send(vehicles)
            })
            .catch( (err) => res.status(500).send(err))
    },
    changeOwnerById: function(req, res, next){
        const db = req.app.get('db');
        let vehicleId = req.params.vehicleId;
        let newOwnerId = req.params.userId;

        db.change_owner().then([vehicleId, newOwnerId], function(vehicles){
            res.status(200).send(vehicles)
        })
        .catch( (err) => res.status(500).send(err))
    },
    destroyOwnership: function(req, res, next){
        const db = req.app.get('db');
        let userId = req.params.userId;
        let vehicleId = req.params.vehicleId;

        db.destroy_ownership().then([userId, vehicleId],function(result){
            res.staus(200).send(result)
        })
        .catch( (err) => res.status(500).send(err))
    },
    destroyVehicle: function(req, res, next){
        const db = req.app.get('db');
        let id = req.params.vehicleId;
        let vehicle = req.body;
        
        db.destroy_vehicle().then([id], function(result){
            res.status(200).send(result)
        })
        .catch( (err) => res.status(500).send(err))
    }
    

    





}
