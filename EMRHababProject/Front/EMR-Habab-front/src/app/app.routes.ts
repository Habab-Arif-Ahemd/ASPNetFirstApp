
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component'
import { LabsComponent } from './labs/labs.component';


export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'MedicalRecords', component: MedicalRecordsComponent },
    { path: 'Labs', component: LabsComponent },
];
