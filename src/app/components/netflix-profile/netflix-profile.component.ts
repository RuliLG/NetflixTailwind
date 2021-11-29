import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/types/profile';

@Component({
  selector: 'app-netflix-profile',
  templateUrl: './netflix-profile.component.html',
  styleUrls: ['./netflix-profile.component.scss']
})
export class NetflixProfileComponent implements OnInit {

  @Input() profile!: Profile

  constructor() { }

  ngOnInit(): void {
  }

}
