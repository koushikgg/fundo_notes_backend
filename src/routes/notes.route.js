import express from 'express';
import * as notesController from '../controllers/notes.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// to create new notes
router.post('',userAuth, notesController.createNotes);
router.get('',userAuth, notesController.readAllNotes);
router.get('/:id',userAuth,notesController.getNotesById)
router.put('/:id',userAuth,notesController.updateNote)
router.delete('/:id',userAuth,notesController.deleteNotes)
router.put('/setColor/:id',userAuth,notesController.changeColor)


export default router;

