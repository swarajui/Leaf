import { Component, OnInit } from '@angular/core';
declare const google;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  lat: number = 28.4595;
  lng: number = 77.0266;
}