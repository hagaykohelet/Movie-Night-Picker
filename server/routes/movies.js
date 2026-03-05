import express from 'express'
import read from '../utils/readDB.js'
const movieRoute = express()


movieRoute.get('/',async(req,res)=>{
    try{
        const movies = await read('./DB/data.json')
        return res.status(200).json({movies:movies})
    }
    catch(err){
        return res.status(400).json({error: String(err)})
    }
})

export default movieRoute