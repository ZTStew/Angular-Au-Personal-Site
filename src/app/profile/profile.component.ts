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
  linkedin_url = 'https://www.linkedin.com/in/zachary-stewart-44b18216b'
  github_url = 'https://github.com/ZTStew'
  myspace_url = 'https://myspace.com/signin'
  personal_description = `
  Personal Description Goes Here
  Full stack web developer
  Interested in...
  </br> test
  `

  constructor(service: LogicService) {
    // calls method from LogicService
    this.values = service.getValues();
  }


  getProfileName() {
    return "Zachary Stewart";
  }


}
