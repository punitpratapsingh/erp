import {
	UserControllers,
} from '../controllers';

const prefix = '/api/users/';
/**
 * @description
 * This is the route handler for the instructors
 * @author punit
 * @since 29 Feb
 */
export default (app) => {
	app.post(`${prefix}create`, UserControllers.create);
	};
