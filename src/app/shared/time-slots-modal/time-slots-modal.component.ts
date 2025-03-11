import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconsComponent } from "../icons/icons.component";

@Component({
  selector: 'app-time-slots-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, IconsComponent],
  templateUrl: './time-slots-modal.component.html',
  styleUrl: './time-slots-modal.component.scss'
})
export class TimeSlotsModalComponent {
  @Input() openingTime: string | null = null;
  @Input() closingTime: string | null = null;
  @Input() weekDayId: number | null = null; // If you need this to track the day
  @Output() close = new EventEmitter<void>();
  @Output() saveTimeSlot = new EventEmitter<{ openingTime: string; closingTime: string; weekDayId: number }>();

  timeSlotForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.timeSlotForm = this.fb.group({
      openingTime: ['', Validators.required],
      closingTime: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.openingTime && this.closingTime) {
      this.timeSlotForm.patchValue({
        openingTime: this.openingTime,
        closingTime: this.closingTime
      });
    }
  }

  closeModal() {
    this.close.emit();
  }

  submitForm() {
    if (this.timeSlotForm.valid) {
      const timeSlotData = {
        openingTime: this.timeSlotForm.value.openingTime,
        closingTime: this.timeSlotForm.value.closingTime,
        weekDayId: this.weekDayId
      };
      this.saveTimeSlot.emit(timeSlotData);
      this.closeModal();
    }
  }
}
