import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../Api/api.service';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  LabResults: any;

  constructor(private patientApiService: ApiService) { }
  ngOnInit() {
    this.fetchLabResults();
  }

  fetchLabResults() {
    this.patientApiService.getLabResults().subscribe(
      (data: any[]) => {
        this.LabResults = data[0];
        console.log('getLabResults ', data);
      },
      (error) => {
        console.error('getLabResults:', error);
      }
    );
  }
}
