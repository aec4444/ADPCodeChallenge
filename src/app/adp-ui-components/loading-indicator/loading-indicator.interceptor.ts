import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoadingIndicatorService } from './loading-indicator.service';

/**
 * Interceptor which captures every Http request to manage the loading indicator
 */
@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {

  constructor(private loadingIndicatorService: LoadingIndicatorService) {}

  /**
   * Pass the request through but use this to determine when a request starts and ends.
   * @param req Request
   * @param next Next handler
   */
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // emit onStarted event before request execution
    this.loadingIndicatorService.onStarted(req);

    return next
      .handle(req)
      .pipe(
        finalize(() => this.loadingIndicatorService.onFinished(req))
      );
  }
}
