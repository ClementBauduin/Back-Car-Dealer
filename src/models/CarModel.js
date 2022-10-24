import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
    marque: String,
    modele: String,
    prix: Number,
    annee: Number
});

const CarModel = mongoose.model("Car",CarSchema);

export default CarModel;