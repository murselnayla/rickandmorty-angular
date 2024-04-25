import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
	selector: 'app-placeholder-empty',
	standalone: true,
	templateUrl: './placeholder-empty.component.html',
	styleUrls: ['./placeholder-empty.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [ButtonModule, NgOptimizedImage, RouterLink, CardModule],
})
export class PlaceholderEmptyComponent {
	@Input() icon: string = 'pi pi-info-circle';
	@Input() text: string = 'No result found';
}
