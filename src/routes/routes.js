import { addnewProduct, getProducts, getProductWithID } from '../controllers/controllers';

const routes = (app) => {
    app.route('/products')

    // Get endpoint 
    .get(getProducts)
    // Post endpoint
    .post(addnewProduct);

    app.route('/products/:ProductID')

    .get(getProductWithID)
}

export default routes;

