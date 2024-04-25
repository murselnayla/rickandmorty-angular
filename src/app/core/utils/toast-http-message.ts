import { MessageService } from 'primeng/api';

export function toastHttpError(message: string, messageService: MessageService) {
	return messageService.add({
		severity: 'error',
		summary: 'Error',
		detail: message,
	});
}

export function toastHttpSuccess(message: string, messageService: MessageService) {
	return messageService.add({
		severity: 'success',
		summary: 'Success',
		detail: message,
	});
}
