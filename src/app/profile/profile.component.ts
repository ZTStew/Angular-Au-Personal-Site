import { Component } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // declares attributes
  public values;
  // variables can be handed to the .html with this declaration
  title = 'Profile';
  linkedin_url = 'https://www.linkedin.com/in/zachary-stewart-44b18216b'
  github_url = 'https://github.com/ZTStew'
  myspace_url = 'https://myspace.com/signin'

  constructor(service: LogicService) {
    // calls method from LogicService
    this.values = service.getValues();
  }


  getProfileName() {
    return "Zachary Stewart";
  }


}
