export const environment = {
	apiRoot: 'https://rickandmortyapi.com/api/',
};

export function getEndpoint(route: string): string {
	return environment.apiRoot + route;
}
