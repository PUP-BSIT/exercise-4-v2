import { Component, Input } from '@angular/core';
import { Profile } from '../../../model/user_music_profile';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() profile: Profile;

  isEditing: boolean = false;
  editedProfile : Profile;

  editProfile(){
    this.isEditing = true;
    this.editedProfile = { ...this.profile };
  }

  saveChanges() {
    this.profile = { ...this.editedProfile };
    this.isEditing = false;
  }
}
