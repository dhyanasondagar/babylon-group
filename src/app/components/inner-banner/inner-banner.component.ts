import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-inner-banner',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './inner-banner.component.html',
  styleUrl: './inner-banner.component.scss'
})
export class InnerBannerComponent {
  @Input({required: true}) heading!: string
  @Input({required: true}) imageSrc!: string; // Image URL passed from the parent





}
