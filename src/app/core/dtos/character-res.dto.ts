import { CharacterGender, CharacterStatus } from '@app/core/enums';

export interface ICharacterRes {
	id: number;
	name: string;
	status: string;
	species: CharacterStatus;
	type: string;
	gender: CharacterGender;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
}
