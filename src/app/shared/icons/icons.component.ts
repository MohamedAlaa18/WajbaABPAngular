import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {
  @Input() iconName!: string;
  @Input() width: string = '25';
  @Input() height: string = '24';
  @Input() viewBox: string = '0 0 25 24';
  @Input() color: string = '#818181';
}
