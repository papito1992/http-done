import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
  // return this.http.post('https://ng-http-aa663.firebaseio.com/data.json', servers,
  //   <RequestOptionsArgs>headers)
    return this.http.put('https://ng-http-aa663.firebaseio.com/data.json', servers,
      <RequestOptionsArgs>headers)
  }
  getServers() {
    return this.http.get('https://ng-http-aa663.firebaseio.com/data.json').map(
      (response) => {const data = response.json ();
      for (const server of data) {
        server.name = 'Fetched_' + server.name;
      }
    return data; });
  }

}
