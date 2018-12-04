const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AssetSchema = new Schema ({
	name: {
		required: true,
		type: String
	},
	price:{
		required: true,
		type: Number
	},
	companyIndustry: {
		type: String
	},
	companySize:{
		type: String
	},
	symbolType: {
		type: String
	}
})


module.exports = mongoose.model("Asset", AssetSchema)
