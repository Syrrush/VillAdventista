import dotenv from 'dotenv'

dotenv.config()

export default {

    app: {
        PORT: process.env.PORT,
        MONGO: process.env.MONGO
    }
}