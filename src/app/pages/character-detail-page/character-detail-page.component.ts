import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CharacterCardComponent } from '@components/character-card/character-card.component';
import { CharacterService } from '@app/services';
import { ICharacterRes } from '@app/core/dtos';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { toastHttpError } from '@app/core/utils';
import { PlaceholderEmptyComponent } from '@components/placeholder-empty/placeholder-empty.component';
import { ActivatedRoute } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';

@Component({
	selector: 'app-character-detail-page',
	standalone: true,
	templateUrl: './character-detail-page.component.html',
	styleUrls: ['./character-detail-page.component.scss'],
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
		PlaceholderEmptyComponent,
		DatePipe,
		DividerModule,
		ListboxModule,
	],
})
export class CharacterDetailPageComponent implements OnInit {
	public isLoading: boolean = false;
	public id: string = '';
	public character!: ICharacterRes;

	constructor(
		private characterService: CharacterService,
		private route: ActivatedRoute,
		private messageService: MessageService,
		private cdRef: ChangeDetectorRef,
	) {}

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.getCharacter(this.id);
	}

	private getCharacter(id: string) {
		this.isLoading = true;
		this.characterService.get(id).subscribe({
			next: (data: ICharacterRes) => {
				this.character = data;
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

	public getEpisodeLabel(urls: string[]): string[] {
		return urls.map((url) => 'Episode ' + url.split('/').pop() || '');
	}
}
