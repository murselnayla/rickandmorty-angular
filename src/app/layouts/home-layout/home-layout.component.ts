import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SidebarComponent } from '@app/layouts/home-layout/components/sidebar/sidebar.component';

@UntilDestroy()
@Component({
	selector: 'app-home-layout',
	standalone: true,
	templateUrl: './home-layout.component.html',
	styleUrls: ['./home-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterOutlet, SidebarComponent],
})
export class HomeLayoutComponent {}
