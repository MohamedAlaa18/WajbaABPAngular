import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirm-delete-modal.component.html',
  styleUrl: './confirm-delete-modal.component.scss'
})
export class ConfirmDeleteModalComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Output() confirmDelete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onConfirm() {
    this.confirmDelete.emit(this.id);
  }

  onCancel() {
    this.cancelDelete.emit();
  }
}
