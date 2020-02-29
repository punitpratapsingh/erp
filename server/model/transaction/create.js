import {
	ResponseUtility,
} from 'appknit-backend-bundle';
import TransactionModel from '../../schemas/transaction';

/**
 * @description service model function to handle the creation of transaction
 * @author punit
 * @since 29 Feb 
 *
 */
export default ({
	date,
	description,
	credit,
	debit
	
}) => new Promise(async (resolve, reject) => {
	try {
		
         const TransactionObject = new TransactionModel({
					   date,
					   description,
					   credit,
					   debit,
		 })
            const transaction = await TransactionObject.save();
		return resolve(ResponseUtility.SUCCESS({
			data: transaction
		}));
	} catch (err) {
		return reject(ResponseUtility.GENERIC_ERR({ message: 'There was some error.', error: err }));
	}
});
