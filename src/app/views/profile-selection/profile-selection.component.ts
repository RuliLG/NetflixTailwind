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
        profilePictureUrl: '',
      },
      {
        id: 2,
        name: 'Anna',
        profilePictureUrl: '',
      },
      {
        id: 3,
        name: 'Adonay',
        profilePictureUrl: '',
      },
      {
        id: 4,
        name: 'Marta',
        profilePictureUrl: '',
      },
    ]
  }

}
