import {
	TransactionControllers,
} from '../controllers';

const prefix = '/api/transaction/';
/**
 * @description
 * This is the route handler for the instructors
 * @author punit
 * @since 29 Feb
 */
export default (app) => {
	app.post(`${prefix}create`, TransactionControllers.create);
	app.post(`${prefix}list`, TransactionControllers.listAll);
	};
