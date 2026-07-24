import { Injectable } from '@angular/core';

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  submit(payload: ContactPayload): Promise<void> {
    const subject = encodeURIComponent(`[Portfolio Contact] ${payload.subject}`);
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}`
    );

    window.location.href = `mailto:venthanf@gmail.com?subject=${subject}&body=${body}`;
    return Promise.resolve();
  }
}
