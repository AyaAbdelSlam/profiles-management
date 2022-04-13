import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute ) { }


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      debugger;
    // in the route we created edit route we set newsfeedid as param so we get it here
      // const NewsfeedID = +params.get('profileId');
      // if (NewsfeedID) {
      //   //this.getAgentbyid(agentid);
      //   console.log(NewsfeedID);
      //   }
     })
    }
}
