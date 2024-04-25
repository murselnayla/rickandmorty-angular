import { IDropdownItem } from '@app/core/interfaces';
import { CharacterStatus } from '@app/core/enums';

export const CHARACTER_STATUS: IDropdownItem[] = [
	{ label: 'Alive', value: CharacterStatus.ALIVE },
	{ label: 'Dead', value: CharacterStatus.DEAD },
	{ label: 'Unknown', value: CharacterStatus.UNKNOWN },
];
