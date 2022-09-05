import express, {Request,Response, Router} from 'express'

const router:Router = express.Router()

router.get('/signUp', (req:Request, res: Response) => {
    res.send('회원가입')
})

router.get('/login', (req:Request, res: Response) => {
    res.send('로그인')
})

router.post('/logout', (req:Request, res: Response) => {
    res.send('로그아웃')
})

export {router as userRouter}

