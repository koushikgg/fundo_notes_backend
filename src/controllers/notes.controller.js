import HttpStatus from 'http-status-codes';
import * as notesService from '../services/notes.service';

export const createNotes = async (req , res) =>{
    // console.log(req.body);
    const data = await notesService.createNotes(req.body);
    res.status(data.code).json(data);
}

export const readAllNotes = async (req , res )=>{
    const data = await notesService.readAllNotes(req.body.userId);
    res.status(data.code).json(data);
}