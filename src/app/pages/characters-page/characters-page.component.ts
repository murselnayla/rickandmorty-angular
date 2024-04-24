import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CharacterCardComponent } from '@components/character-card/character-card.component';
import { CharacterService } from '@app/services';
import { ICharacterRes, PaginationRes } from '@app/core/dtos';
import { NgForOf } from '@angular/common';

@Component({
	selector: 'app-characters-page',
	standalone: true,
	templateUrl: './characters-page.component.html',
	styleUrls: ['./characters-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CharacterCardComponent, NgForOf],
})
export class CharactersPageComponent implements OnInit {
	public characters: ICharacterRes[] = [];

	constructor(
		private characterService: CharacterService,
		private cdRef: ChangeDetectorRef,
	) {}

	ngOnInit() {
		this.getCharacters();
	}

	public getCharacters() {
		this.characterService.getAll().subscribe({
			next: (data: PaginationRes<ICharacterRes>) => {
				this.characters = data.results;
				this.cdRef.detectChanges();
			},
			error: (err) => console.error(err),
		});
	}
}
