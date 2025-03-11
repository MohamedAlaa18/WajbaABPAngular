import { Component, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsComponent } from 'src/app/shared/icons/icons.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map-modal',
  standalone: true,
  imports: [IconsComponent, ReactiveFormsModule],
  templateUrl: './map-modal.component.html',
  styleUrl: './map-modal.component.scss'
})
export class MapModalComponent implements AfterViewInit {
  @Output() coordinatesSelected = new EventEmitter<{ longitude: number; latitude: number }>();
  @Output() close = new EventEmitter<void>();

  longitude: number = 0;
  latitude: number = 0;
  map: google.maps.Map | undefined;
  searchForm: FormGroup;
  marker: google.maps.Marker | undefined;
  autocomplete: google.maps.places.Autocomplete | undefined;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngAfterViewInit() {
    this.initMap();
    this.initAutocomplete();
  }

  // Initialize Google Map
  initMap() {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      mapTypeControl: false,
    });

    // Add a marker when clicking on the map
    this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        this.updateMarker(event.latLng);
        this.longitude = event.latLng.lng();
        this.latitude = event.latLng.lat();
      }
    });

    // Handle double-click event to set coordinates and close modal
    this.map.addListener('dblclick', (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        const latLng = event.latLng;
        this.longitude = latLng.lng();
        this.latitude = latLng.lat();
        this.coordinatesSelected.emit({ longitude: this.longitude, latitude: this.latitude });
        this.close.emit(); // Close the modal
      }
    });
  }

  // Initialize Google Places Autocomplete
  // Initialize Google Places Autocomplete
  initAutocomplete() {
    const input = document.querySelector('input[formControlName="search"]') as HTMLInputElement;

    // Ensure input exists
    if (!input) return;

    this.autocomplete = new google.maps.places.Autocomplete(input, {
      fields: ['geometry'], // Only fetch geometry information
      types: ['geocode'], // Limit to geographical results
    });

    // Add listener to update map when a place is selected
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete?.getPlace();
      if (place?.geometry?.location) {
        const location = place.geometry.location;
        this.updateMarker(location);
        this.map?.setCenter(location); // Center map on the selected location
        this.longitude = location.lng();
        this.latitude = location.lat();
      }
    });
  }

  performSearch() {
    const searchQuery = this.searchForm.get('search')?.value;
    if (searchQuery) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: searchQuery }, (results, status) => {
        if (status === 'OK' && results && results[0].geometry.location) {
          const location = results[0].geometry.location;
          this.updateMarker(location);
          this.map?.setCenter(location); // Center map on the location
          this.longitude = location.lng();
          this.latitude = location.lat();
        } else {
          alert('Search location not found.');
        }
      });
    }
  }

  // Update the marker position
  updateMarker(location: google.maps.LatLng) {
    if (this.marker) {
      this.marker.setPosition(location);
    } else {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Selected Location',
      });
    }
    this.map?.setCenter(location); // Center the map on the selected location
  }

  // Get current location and center map on it
  goToCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const location = new google.maps.LatLng(latitude, longitude);
        this.updateMarker(location);
        this.map?.setCenter(location);
        this.longitude = longitude;
        this.latitude = latitude;
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  closeModal() {
    this.close.emit();
  }
}
