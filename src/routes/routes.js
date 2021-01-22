import { addnewBook, getBooks, deleteBook, updateBook, getBookWithID } from '../controllers/controllers';

const routes = (app) => {
    app.route('/books')

    .get(getBooks)
    .post(addnewBook);

    app.route('/books/:BookID')

    .get(getBookWithID)
    .put(updateBook)
    .delete(deleteBook);
}

export default routes;

