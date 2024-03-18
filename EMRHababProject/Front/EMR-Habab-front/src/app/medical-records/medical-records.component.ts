import { Component, OnInit, NgModule } from '@angular/core';
import { PatientApiService } from '../Api/patient-api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-medical-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medical-records.component.html',
  styleUrl: './medical-records.component.css'
})
export class MedicalRecordsComponent {
  medicalRecords: any;

  constructor(private patientApiService: PatientApiService) { }

  ngOnInit() {
    this.fetchMedicalRecords();
  }

  fetchMedicalRecords() {
    this.patientApiService.getPatient().subscribe(
      (data: any[]) => {
        this.medicalRecords = data[2];
        console.log('Medical Records:hi', data[2]);
      },
      (error) => {
        console.error('Error fetching medical records:', error);
      }
    );
  }
}
