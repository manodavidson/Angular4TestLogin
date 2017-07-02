import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    allowNewServer = false;
    username = '';
    password = '';
    textAreaEmptyCheck(){
        if (this.username != '' && this.password != '' ) {
            this.allowNewServer = true;
        } else{
            this.allowNewServer = false;
        }
    }
    updateUsername(event : Event){
        this.username = (<HTMLInputElement>event.target).value;
        this.textAreaEmptyCheck();
    }
    updatePassword(event : Event){
        this.password = (<HTMLInputElement>event.target).value;
        this.textAreaEmptyCheck();
    }
    ngOnInit(){

    }
}