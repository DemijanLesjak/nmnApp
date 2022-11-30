import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-tag',
  templateUrl: './location-tag.component.html',
  styleUrls: ['./location-tag.component.scss']
})
export class LocationTagComponent {
  @Input() location: string = '';
  @Input() timestamp: string | undefined;

}
