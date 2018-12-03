const Hapi = require('hapi');
const mongoose = require('mongoose')
const Promise = require('bluebird')


mongoose.connect('mongodb://user123456:user123456@ds237373.mlab.com:37373/asset', { useNewUrlParser : true });
let db = mongoose.connection

db.on('error', console.log('error has occured'))
db.once('open', () => {
	console.log('connected to database')})


mongoose.connect


const server = Hapi.server ({
	port: '3000',
	host: 'localhost'
})

const init = async () => {
	await server.start();
	console.log(`server running at ${server.info.uri}`)
}


process.on('unhandledRejection', (err) => {
	console.log(err)
	process.exit(1);
})

init();

