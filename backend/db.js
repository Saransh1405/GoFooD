const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://GoFood:chiya123@cluster0.3ekrpok.mongodb.net/GoFood?retryWrites=true&w=majority"
// 
// "mongodb+srv://GoFood:chiya123@cluster0.3ekrpok.mongodb.net/GoFood?retryWrites=true&w=majority"
// mongodb+srv://GoFood:chiya123@cluster0.3ekrpok.mongodb.net/GoFood?retryWrites=true&w=majority"
// "mongodb://GoFood:chiya123@ac-d65qtcp-shard-00-00.3ekrpok.mongodb.net:27017,ac-d65qtcp-shard-00-01.3ekrpok.mongodb.net:27017,ac-d65qtcp-shard-00-02.3ekrpok.mongodb.net:27017/GoFood?ssl=true&replicaSet=atlas-ci4pim-shard-0&authSource=admin&retryWrites=true&w=majority"

const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {

        if (err) console.log("----", err);

        else {
            console.log("connected");

            // READ

            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {

                const foodCategory = await mongoose.connection.db.collection("food_category");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);

                    else {
                        global.food_items = data;
                        global.food_category = catData;
                    }
                })
            })
        }
    });
}

module.exports = mongoDB;