import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login, LoginResponse } from 'src/app/interfaces/login';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public userToken: string;
  public me = {} as User;

  constructor(
    private http: HttpClient
  ) {}

  async login(body: Login): Promise<void> {

    // Wrappo l'observable di una chiamata login dentor una promise.
    return new Promise<void>((resolve, reject) => {
      const sub = this.http.post<LoginResponse>(`${environment.API_URL}/login`, body, this.httpOptions)
      .subscribe(async res => { //res contiene i dati della risposta ottenuta come Observable

        // se ottengo risposta, popolo la variable userToken con il token ricevuto
        this.userToken = res.accessToken;

        // mi tolgo dall'ascolto dell'observable
        sub.unsubscribe();

        // effettuo la chiamata me per popolare l'oggetto 'me' con i miei dati
        this.me = await this.getMe();

        // risolvo la promise
        resolve();

      }, reject);

    });

  }

    // ME
    async getMe() {
      const headerOptions = this.httpOptions.headers.append('Authorization', `Bearer ${this.userToken}`);
      return this.http.get<User>(`${environment.API_URL}/me`, {
        headers: headerOptions
      }).toPromise();
    }

}
