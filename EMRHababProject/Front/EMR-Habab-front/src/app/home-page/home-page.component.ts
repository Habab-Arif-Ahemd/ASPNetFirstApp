import { Component } from '@angular/core';
import { HeaderComponent } from '../Static/Header/header/header.component';
import { FooterComponent } from "../Static/Footer/footer/footer.component";
import { MedicalRecordsComponent } from "../medical-records/medical-records.component";
import { LabsComponent } from "../labs/labs.component";
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  imports: [HeaderComponent, FooterComponent, MedicalRecordsComponent, LabsComponent, MatTabsModule],

})
export class HomePageComponent {

}
