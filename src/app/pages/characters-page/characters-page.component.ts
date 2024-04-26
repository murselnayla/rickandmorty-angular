import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CharacterCardComponent } from '@app/pages/characters-page/components/character-card/character-card.component';
import { CharacterService } from 'src/app/core/services';
import { ICharacterRes, PaginationRes } from '@app/core/dtos';
import { NgForOf, NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { toastHttpError } from '@app/core/utils';
import { PlaceholderEmptyComponent } from '@components/placeholder-empty/placeholder-empty.component';
import { PaginatorComponent } from '@components/paginator/paginator.component';
import { CharactersSearchComponent } from '@app/pages/characters-page/components/characters-search/characters-search.component';
import { ICharactersQuery } from '@app/pages/characters-page/interfaces';

@Component({
	selector: 'app-characters-page',
	standalone: true,
	templateUrl: './characters-page.component.html',
	styleUrls: ['./characters-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CharactersSearchComponent,
		CharacterCardComponent,
		PlaceholderEmptyComponent,
		PaginatorComponent,
		ProgressSpinnerModule,
		NgForOf,
		NgIf,
		InputTextModule,
		ButtonModule,
	],
})
export class CharactersPageComponent implements OnInit {
	public isLoading: boolean = false;
	public characters: ICharacterRes[] = [];
	public totalPages = 0;
	public query!: ICharactersQuery;

	constructor(
		private characterService: CharacterService,
		private messageService: MessageService,
		private cdRef: ChangeDetectorRef,
	) {
		this.setDefaultQuery();
	}

	ngOnInit() {
		this.getCharacters(this.query);
	}

	private setDefaultQuery() {
		this.query = {
			page: 1,
			name: '',
			status: '',
			species: '',
			type: '',
			gender: '',
		};
	}

	private getCharacters(query?: ICharactersQuery) {
		this.isLoading = true;
		this.characterService.getAll(query).subscribe({
			next: (data: PaginationRes<ICharacterRes>) => {
				this.characters = data.results;
				this.totalPages = data.info.pages;
				this.isLoading = false;
				this.cdRef.detectChanges();
			},
			error: ({ error }) => {
				toastHttpError(error, this.messageService);
				this.isLoading = false;
				this.cdRef.detectChanges();
			},
		});
	}

	public onChangePageQuery(page: number, query: ICharactersQuery) {
		query.page = page;
		this.getCharacters(query);
	}

	public onClickSearch(query: ICharactersQuery) {
		this.query.page = 1;
		this.getCharacters(query);
	}

	public onClickReset() {
		this.setDefaultQuery();
		this.getCharacters(this.query);
	}
}
