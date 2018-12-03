// import handlers

module.exports = 
[
	{
		method: 'GET',
		path: '/assets',
		handler: assetHandler.findAll
	},
	{
		method: 'GET',
		path: '/assets/{id}',
		handler: assetHandler.findOne
	},
	{
		method: 'POST',
		path: '/assets',
		handler: assetHandler.createNew
	},
	{
		method: 'PUT'.
		path: '/assets/{id}',
		handler: assetHandler.updateOne
	},
	{
		method: 'DELETE',
		path: '/assets/{id}',
		handler: assetHandler.deleteOne
	}
]