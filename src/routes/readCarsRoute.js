import CarModel from "../models/CarModel.js"; 

export default async (req,res) => {

    let page;
    if ( isNaN(req.query.page) ) {
        page = 0;
    } else {
        page = req.query.page - 1;
    }

    console.log(page)
    let params = {}

    if (req.query.marque != "" && req.query.marque != undefined) {
        params = {
         marque: req.query.marque
         }
    } if (req.query.modele != "" && req.query.modele != undefined) {
         params = {
         ...params,
         modele: req.query.modele
         }
    } if (req.query.prix != "" && req.query.prix != undefined) {
         params = {
         ...params,
         prix: { $lte : req.query.prix}
         }
    } if (req.query.annee != "" && req.query.annee != undefined) {
         params = {
         ...params,
         annee: {$gte : req.query.annee}
         }
    }
       
    console.log(params)
    const cars = await CarModel
    .find(params)
    .skip(page*6)
    .limit(6)
    .sort({marque : "asc"});
    res.json(cars);
}