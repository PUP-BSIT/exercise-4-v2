import { Component } from '@angular/core';
import { Profile } from '../../model/user_music_profile';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  profiles: Profile[] = [];
}