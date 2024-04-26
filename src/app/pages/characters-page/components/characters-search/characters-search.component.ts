import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { CHARACTER_GENDER, CHARACTER_STATUS } from '@app/core/constants';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IDropdownItem } from '@app/core/interfaces';
import { ICharactersQuery } from '@app/pages/characters-page/interfaces';

@Component({
	selector: 'app-characters-search',
	standalone: true,
	templateUrl: './characters-search.component.html',
	styleUrls: ['./characters-search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [PaginatorModule, ButtonModule, InputTextModule],
})
export class CharactersSearchComponent {
	public readonly CHARACTER_STATUS: IDropdownItem[] = CHARACTER_STATUS;
	public readonly CHARACTER_GENDER: IDropdownItem[] = CHARACTER_GENDER;

	@Input() query!: ICharactersQuery;
	@Output() clickSearch = new EventEmitter<ICharactersQuery>();
	@Output() clickReset = new EventEmitter<null>();
}
