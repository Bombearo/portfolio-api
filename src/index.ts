import express, { Request, Response } from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/api', (_req: Request, res: Response) => {
    res.send('Express Typescript on Vercel')
    return;
})

app.get('/api/ping', (_req: Request, res: Response) => {
  res.send('pong 🏓');
  return ;
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})