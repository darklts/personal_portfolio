import { connect, connection, ConnectOptions } from 'mongoose'

async function connectToDB(): Promise<void> {
  try {
    const DB_URI =
      'mongodb+srv://dark:Seccion.96@merakaicluster.9wihlla.mongodb.net/web_portfolio?retryWrites=true&w=majority&appName=MerakaiCluster'

    await connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)

    const db = connection
    db.on('error', console.error.bind(console, 'connection error: '))
    db.once('open', function () {
      console.log('Connected successfully')
    })
  } catch (error) {
    console.error('Error! \n Error Database connected:', error)
    throw error
  }
}

export default connectToDB
