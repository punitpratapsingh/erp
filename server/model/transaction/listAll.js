import { ResponseUtility } from 'appknit-backend-bundle';
import { TransactionModel } from '../../schemas';
/**
 * @description
 * service model function to list down all the all on the platform.
 * @author punit
 * @since 29 Feb
 */
export default ({
}) => new Promise(async (resolve, reject) => {
	try {
		const aggregattionQuery = [
			{
				$group: {
					_id: null,
					debit: { $sum: '$debit' },
					credit: { $sum: '$credit' }
				}
			},

			{
				$project: {
					description: '$description',
					date: '$date',
					credit: '$credit',
					debit: '$debit',
					balance: {
						$subtract: ["debit","credit"]
						
					}
				}
			}
		];

		const list = await TransactionModel.aggregate(aggregattionQuery);

		return resolve(ResponseUtility.SUCCESS({ data: list }));
	} catch (err) {
		return reject(ResponseUtility.GENERIC_ERR({ error: err.error, message: err.message }));
	}
});
