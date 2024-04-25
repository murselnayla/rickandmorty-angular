import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CharacterCardComponent } from '@components/character-card/character-card.component';
import { CharacterService } from '@app/services';
import { ICharacterRes, PaginationRes } from '@app/core/dtos';
import { NgForOf, NgIf } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CHARACTER_STATUS, CHARACTER_GENDER } from '@app/core/constants';
import { IDropdownItem } from '@app/core/interfaces';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { toastHttpError } from '@app/core/utils';

interface IQueryParam {
	page?: number;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	gender?: string;
}

@Component({
	selector: 'app-characters-page',
	standalone: true,
	templateUrl: './characters-page.component.html',
	styleUrls: ['./characters-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CharacterCardComponent,
		NgForOf,
		PaginatorModule,
		CardModule,
		InputTextModule,
		ButtonModule,
		ProgressSpinnerModule,
		NgIf,
	],
})
export class CharactersPageComponent implements OnInit {
	public isLoading: boolean = false;
	public characters: ICharacterRes[] = [];
	public CHARACTER_STATUS: IDropdownItem[] = CHARACTER_STATUS;
	public CHARACTER_GENDER: IDropdownItem[] = CHARACTER_GENDER;
	public totalPages = 0;
	public query!: IQueryParam;

	constructor(
		private characterService: CharacterService,
		private messageService: MessageService,
		private cdRef: ChangeDetectorRef,
	) {
		this.setQuery();
	}

	ngOnInit() {
		this.getCharacters(this.query);
	}

	private setQuery() {
		this.query = {
			page: 1,
			name: '',
			status: '',
			species: '',
			type: '',
			gender: '',
		};
	}

	private getCharacters(query?: any) {
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

	public onChangePageQuery(event: any, query: any) {
		query.page = event.page + 1;
		this.getCharacters(query);
	}

	public onClickSearch(query: any) {
		this.getCharacters(query);
	}

	public onClickReset() {
		this.setQuery();
		this.getCharacters();
	}
}
