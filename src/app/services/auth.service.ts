import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user';
import { CommunicationService } from '../common/communication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private communicationService: CommunicationService) {
  }

  login(user: User): void {
    this.communicationService.messages.next(user);

    this.communicationService.messages.subscribe(msg => {
      if (msg.responseType === 101 && msg.sid) {
        localStorage.setItem('sessionId', msg.sid);
        this.router.navigate(['/home']);
      }
    });
  }
}
