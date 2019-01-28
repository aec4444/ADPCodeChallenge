import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpRequest, HttpClient } from '@angular/common/http';

// app imports
import { LoadingIndicatorService } from './loading-indicator.service';
import { LoadingIndicatorInterceptor } from './loading-indicator.interceptor';
import { componentFactoryName } from '@angular/compiler';


describe('LoadingIndicatorService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        LoadingIndicatorService,
        { provide: HTTP_INTERCEPTORS, useClass: LoadingIndicatorInterceptor, multi: true}
      ]
    });

    // get mock http
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: LoadingIndicatorService = TestBed.get(LoadingIndicatorService);
    expect(service).toBeTruthy();
  });

  it('should emit loading', inject([LoadingIndicatorService], (service: LoadingIndicatorService) => {
    service.onLoadingChanged.subscribe((isLoading: boolean) => {
      expect(isLoading).toBeTruthy();
    });
    service.onStarted(new HttpRequest<any>('GET', 'http://test.com'));
  }));

  it('should emit done', inject([LoadingIndicatorService], (service: LoadingIndicatorService) => {
    const req = new HttpRequest<any>('GET', 'http://test.com');
    service.onStarted(req);

    service.onLoadingChanged.subscribe((isLoading: boolean) => {
      expect(isLoading).toBeFalsy();
    });
    service.onFinished(req);
  }));

  it('should call finished', inject([LoadingIndicatorService, HttpClient], (service: LoadingIndicatorService, http: HttpClient) => {
    service.onLoadingChanged.subscribe((isLoading) => {
      if (!isLoading) {
        expect(isLoading).toBeFalsy();
      }
    });
    http.get('http://loadingIndicatorService.com').subscribe(() => {
      // no op
    });

    httpMock.expectOne('http://loadingIndicatorService.com').flush({test: 'successful'});
  }));

  it('should notify when no requests in queue', inject([LoadingIndicatorService], (service: LoadingIndicatorService) => {
    const req = new HttpRequest<any>('GET', 'http://test.com');

    service.onLoadingChanged.subscribe((isLoading) => {
      expect(isLoading).toBeFalsy();
    });

    service.onFinished(req);
  }));
});
