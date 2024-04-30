import { Component } from '@angular/core';
import { Profile } from '../../model/user_music_profile';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  profiles: Profile[] = []

    newProfile: Profile = {
      id : null,
      username: '',
      birthday: null,
      age: null,
      location: '',
      music_taste: '',
      mood: '',
      favorite_song: ''
  }

  isProfileValid(profile: Profile){
    return (
      profile.username &&
      profile.birthday &&
      profile.age &&
      profile.location &&
      profile.music_taste &&
      profile.mood &&
      profile.favorite_song
    );
  }

  resetNewProfile(){
    this.newProfile = {
      id : null,
      username: '',
      birthday: null,
      age: null,
      location: '',
      music_taste: '',
      mood: '',
      favorite_song: ''
    };
  }

  addProfile(){
    if (this.isProfileValid(this.newProfile)){  
      this.newProfile.id = this.profiles.length + 1;
      this.profiles.push(this.newProfile);
      this.resetNewProfile();
    }
  }

  deleteProfile(profile: Profile){
    const confirmDelete = confirm(
      "Are you sure you want to delete this Profile");
    if (confirmDelete){
      this.profiles = this.profiles.filter(s => s !== profile);
    }
  }

  updateProfile(updatedProfile : Profile) {
    const index = this.profiles.findIndex(s => s.id === updatedProfile.id);
    if (index !== -1){
      this.profiles[index] = { ...updatedProfile };
    }
  }
}
