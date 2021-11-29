import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/types/profile';

@Component({
  selector: 'app-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss']
})
export class ProfileSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get profiles(): Profile[] {
    return [
      {
        id: 1,
        name: 'David',
        profilePictureUrl: 'https://occ-0-4538-358.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png',
      },
      {
        id: 2,
        name: 'Anna',
        profilePictureUrl: 'https://occ-0-4538-358.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png',
      },
      {
        id: 3,
        name: 'Adonay',
        profilePictureUrl: 'https://occ-0-4538-358.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGt38lP6INwT06gZ5Nn1fi8zT7r-ad0GfCsiLhB6zibZZCCCq_0EdrPvh5_-xs-pNl0Bilexan-d2mjkdyUGLbcEgB7.png',
      },
      {
        id: 4,
        name: 'Marta',
        profilePictureUrl: 'https://occ-0-4538-358.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png',
      },
      {
        id: 4,
        name: 'Simba',
        profilePictureUrl: 'https://occ-0-4538-358.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdncPfYmTRo7xw4Ks4PmwwtPi9EzTKLhOU4FwYCmhGBLqDvFZBTU6aV8QCSpnLBmy9V3W2M0LsvngAeebEXmcwNuL0AF.png',
      },
    ]
  }

}
