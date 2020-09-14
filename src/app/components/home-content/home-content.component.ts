import { Component, OnInit, NgZone } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { ApiCallerService } from 'src/app/api-caller.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  faLink = faLink;

  serverResponse: string;

  constructor(public apiCallerService: ApiCallerService,
    public ngZone: NgZone) { }

  ngOnInit() {
  }


  onCallApi(){
    this.apiCallerService.getString().subscribe((resp: any) =>{
      this.ngZone.run(() =>{
        this.serverResponse = resp.responseMessage;
      });
    })
  }


}
