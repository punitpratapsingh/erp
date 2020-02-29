/**
* 
*/
import { TransactionModel } from '../model';
import { ModelResolver } from './resolvers';

export default {
	create: (req, res) => ModelResolver(req, res, TransactionModel.TransactionCreateService),
};
