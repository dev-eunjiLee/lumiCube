import MainApp from './App';
import {userRouter} from './user/router'


const app = new MainApp().application;

app.use('/user', userRouter)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});