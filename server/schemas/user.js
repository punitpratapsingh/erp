/**
 * This schema represents the account  schema
 * @author punit
 * @since 29 Feb
 */
import { Schema } from 'mongoose';
import database from '../db';

const Transaction = new Schema({
	date: { type: Date },
	description: { type: String },
	credit: { type: Number },
	debit: { type: Number },

});

export default database.model('Transaction', Transaction);
