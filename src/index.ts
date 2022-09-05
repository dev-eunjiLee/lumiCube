import App from './App';
import { Request,Response } from 'express';
const app = new App().application;

app.use('/hi', function (req:Request, res: Response, next: Function){
  console.log('hihi');
  next();
})

app.get('/hi', (req:Request, res: Response) => {
  console.log('hi')
  res.send('hi')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});