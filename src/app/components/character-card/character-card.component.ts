import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICharacterRes } from '@app/core/dtos';
import { CharacterGender, CharacterStatus } from '@app/core/enums';
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-character-card',
	standalone: true,
	templateUrl: './character-card.component.html',
	styleUrls: ['./character-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonModule, NgOptimizedImage, RouterLink],
})
export class CharacterCardComponent {
	@Input() character: ICharacterRes = {
		id: 2,
		name: 'Morty Smith',
		status: CharacterStatus.ALIVE,
		species: 'Human',
		type: '',
		gender: CharacterGender.MALE,
		origin: {
			name: 'Earth',
			url: 'https://rickandmortyapi.com/api/location/1',
		},
		location: {
			name: 'Earth',
			url: 'https://rickandmortyapi.com/api/location/20',
		},
		image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
		episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2'],
		url: 'https://rickandmortyapi.com/api/character/2',
		created: '2017-11-04T18:50:21.651Z',
	};
}
