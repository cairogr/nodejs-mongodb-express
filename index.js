import { createServerHTTP } from './modules/express.js'

import { connectToDatabase } from './src/database/connect.js'


createServerHTTP()

connectToDatabase()