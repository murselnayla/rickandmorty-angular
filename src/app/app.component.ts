import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	providers: [MessageService, DialogService],
	imports: [RouterOutlet, ToastModule],
})
export class AppComponent {}
