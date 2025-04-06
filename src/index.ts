import express, { Request, Response } from 'express'
import {createClient} from '@supabase/supabase-js'
import dotenv from 'dotenv'
dotenv.config()


const app = express()
const port = process.env.PORT || 3000

const supabaseUrl = process.env.SUPABASE_URL || ''
const supabaseKey = process.env.SUPABASE_ANON_KEY || ''
console.log('supabaseUrl', supabaseUrl)
const supabase = createClient(supabaseUrl, supabaseKey)

app.get('/', (_req: Request, res: Response) => {
    res.send('Express Typescript on Vercel')
    return;
})

app.get('/about', async (_req: Request, res: Response) => {
    const { data, error } = await supabase
        .from('about')
        .select()
    if (error) {
        console.error('Error fetching data from Supabase:', error)
        res.status(500).send('Error fetching data from Supabase')
        return;
    }
    console.log('Data from Supabase:', data)
    res.json(data)
    return;
})

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong 🏓');
  return ;
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})