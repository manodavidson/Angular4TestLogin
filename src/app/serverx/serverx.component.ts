import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-serverx',
    templateUrl: './serverx.component.html'
})
export class ServerxComponent implements OnInit {
    serverId = 10;
    serverRegistrationStatus = 'Not yet';
    serverStatus = 'available';
    getServerId(){
        return this.serverId;
    }
    getServerStatus() {
        return this.serverStatus;
    }
    constructor(){
        //setTimeout(() => {this.allowNewServer = true},2000);
    }
    ngOnInit(){

    }
    onServerRegistration(){
        this.serverRegistrationStatus = 'Yes please';
    }
}