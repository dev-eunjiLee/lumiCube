import express from 'express'
const app = express();
const port = 8080;

app.get('/', (_,res) => {
    res.status(200).send()
})

app.listen(port, () => console.log(`Running on port ${port}`))

/*
 * TODO: next + express 연결
 *  방법: https://chanho-yoon.github.io/next/express/next-connect-express/
 */