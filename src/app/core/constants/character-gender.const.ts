import { IDropdownItem } from '@app/core/interfaces';
import { CharacterGender } from '@app/core/enums';

export const CHARACTER_GENDER: IDropdownItem[] = [
	{ label: 'Male', value: CharacterGender.MALE },
	{ label: 'Female', value: CharacterGender.FEMALE },
	{ label: 'Genderless', value: CharacterGender.GENDERLESS },
	{ label: 'Unknown', value: CharacterGender.UNKNOWN },
];
