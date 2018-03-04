import { Component } from '@angular/core';
import {ServerService} from './server.service';
import {error} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
  constructor(private serverService: ServerService) {}
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    })
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
      (error1) => console.log(error1));
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => this.servers = servers,
      ( err1or ) => console.log(err1or));
  }
}
