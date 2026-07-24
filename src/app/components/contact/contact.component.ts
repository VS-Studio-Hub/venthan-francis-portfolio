import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ContactPayload, ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  readonly data = inject(PortfolioDataService);

  readonly isSubmitting = signal(false);
  readonly successMessage = signal('');
  readonly errorMessage = signal('');

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(4)]],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  async submit(): Promise<void> {
    this.successMessage.set('');
    this.errorMessage.set('');

    if (this.contactForm.invalid) {
      this.errorMessage.set('Please complete all required fields before sending.');
      return;
    }

    this.isSubmitting.set(true);

    try {
      await this.contactService.submit(this.contactForm.getRawValue() as ContactPayload);
      this.successMessage.set('Your email app should open with the message ready to send.');
      this.contactForm.reset();
    } catch {
      this.errorMessage.set('Something went wrong. Please use the email button instead.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
