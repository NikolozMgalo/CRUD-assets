const Promise = require("bluebird")
const mongoose = require('mongoose')
const Asset = require('../model/asset.model.js')


module.exports = 
{
	findAll(req, h)
	{
		return new Promise((resolve, reject) => {
			Asset.find({}, (err, assets) =>{
				if(err){
					reject(err)
				} 
				resolve(assets)
			})
		})
		

	},

	findOne(req, h)
	{
		return new Promise((resolve, reject) => {
			Asset.find({_id: req.params.id}, (err, asst) => {
				if(err){
					reject(err)
				}
				resolve(asst)
			})
		})
	},

	deleteOne(req, h)
	{
		return Asset.findOneAndDelte({_id: req.params.id}).then((asset) =>{
			return {message: "deleted"}
		}).catch(err => {
			return {err: "error has occured double check infrot"}
		})
	},
	createNew(req, h)
	{
		return new Promise((resolve, reject) => {
			Asset.create({
				name: req.payload.name,
				price: req.payload.price
			}, (err, asst) => {
				if(err){
					reject(err => {
						return {err: " Error has occured please double check information"}
					})
				}
				resolve(asst)
			})
		})
		
	},
	updateOne(req, h)
	{	
		let assetData = {}
		return Asset.findById({_id : req.params.id}).then((asset) =>{ 
			asset.name = req.payload.name,
			asset.price = req.payload.price
			asset.save(assetData)
		}).then((data) =>{
			return {message: "updated"}
		}).catch(err => {
			
			return {err: "error has occured, please double check the ID"}
		})

		
	}

}