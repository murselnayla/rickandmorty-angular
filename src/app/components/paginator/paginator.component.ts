import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';

@Component({
	selector: 'app-paginator',
	standalone: true,
	templateUrl: './paginator.component.html',
	styleUrls: ['./paginator.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [PaginatorModule],
})
export class PaginatorComponent {
	@Input() totalPages!: number;
	@Input() totalCount!: number;
	@Output() changePage = new EventEmitter<number>();
}
