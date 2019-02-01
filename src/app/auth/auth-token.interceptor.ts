import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authService.getToken();

    if (typeof token !== 'undefined') {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
          'X-IBM-Client-Id': environment.client_id,
          'X-IBM-Client-Secret': environment.secret,
        }
      });
    }

    return next.handle(req);
  }

}
