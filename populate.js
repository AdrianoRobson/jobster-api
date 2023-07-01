require('dotenv').config()

const mockData = require('./moc-data.json')
const Job = require('./models/Job')
const connectDB = require('./db/connect')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Job.create(mockData)
        console.log('Success !!!')
    } catch (error) {
        console.log(err)
        process.exit(1)
    }
}

start()