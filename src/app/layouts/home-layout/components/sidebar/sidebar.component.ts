import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, NgForOf, RouterLinkActive],
})
export class SidebarComponent {
	public NAV_ITEMS: any = [
		{
			icon: 'pi pi-home',
			label: 'Home',
			link: '/home',
		},
		{
			icon: 'pi pi-users',
			label: 'Characters',
			link: '/characters',
		},
	];
}
