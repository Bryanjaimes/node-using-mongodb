import mongoose from 'mongoose';
import { INTEGER } from 'sequelize/types';

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a book title'
    },
    author: {
        type: String,
        required: 'Enter author name(s)'
    },
    year_of_publication: {
        type: String,
        required: 'Enter year of publication'
    },
    ISBN: {
        type: String,
        required: 'Enter ISBN'
    },
    number_of_copies: {
        type: INTEGER,
        required: 'Enter number of copies'
    }
});

