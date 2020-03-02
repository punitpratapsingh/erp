/**
* This is the erp constant file
* @author punit
* @since 29 Feb
*/

export const {
	NODE_ENV = 'development',
	S3_BUCKET = '',
	// atlas configurations
	ATLAS_USER,
	ATLAS_PASSWORD,
	CLUSTER1,
	CLUSTER2,
	CLUSTER3,
	SHARD,
	SECRET_STRING,
	
} = process.env;

const db = process.env.MONGO_DB || erp;



// export const mongoConnectionString = `mongodb://${host}:${port}/${db}`;
export const mongoConnectionString = `mongodb+srv://${ATLAS_USER}:${ATLAS_PASSWORD}@erp-v0la5.mongodb.net/test?retryWrites=true&w=majority`;

// this string is unique for each project construction
export const secretString = SECRET_STRING;

export const SUCCESS_CODE = 100;

export const MB = 1024 * 1024;
