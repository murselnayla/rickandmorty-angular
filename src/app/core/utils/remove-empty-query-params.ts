export const removeEmptyQueryParams = (params: any): any => {
	return Object.keys(params || {}).reduce((acc: any, key: any) => {
		if (params[key] !== null && params[key] !== undefined && params[key] !== '') {
			acc[key] = params[key];
		}
		return acc;
	}, {});
};
