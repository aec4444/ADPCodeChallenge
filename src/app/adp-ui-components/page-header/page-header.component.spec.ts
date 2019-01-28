import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { PageHeaderComponent } from './page-header.component';
import { LoadingIndicatorService } from '../loading-indicator/loading-indicator.service';
import { LoadingIndicatorInterceptor } from '../loading-indicator/loading-indicator.interceptor';



describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;
  let loading: LoadingIndicatorService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageHeaderComponent
      ],
      providers: [
        LoadingIndicatorService,
        { provide: HTTP_INTERCEPTORS, useClass: LoadingIndicatorInterceptor, multi: true}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    loading = TestBed.get(LoadingIndicatorService);
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should destroy loading if set', () => {
    component.loadingSubscription = new Subscription();
    component.destroyLoading();
    expect(component.loadingSubscription).toBeUndefined();
  });

  it('should call destroying if showLoading false', () => {
    component.showLoading = false;

    component.loadingSubscription = new Subscription();
    component.initializeLoadingIndicator();
    expect(component.loadingSubscription).toBeUndefined();
  });

  it('should set loading = true', fakeAsync(() => {
    // spyOn setTimeout to call the function immediately
    const spy = spyOn(window, 'setTimeout').and.callFake((fn: Function) => {
      fn();
      expect(component.isLoading).toBeTruthy();
    });

    component.showLoading = true;
    component.initializeLoadingIndicator();
    loading.onLoadingChanged.emit(true);
    fixture.detectChanges();
    expect(component.isLoading).toBeTruthy();
  }));

  it('should initialize on changes', fakeAsync(() => {
    // spyOn setTimeout to call the function immediately
    const spy = spyOn(window, 'setTimeout').and.callFake((fn: Function) => {
      fn();
      expect(component.isLoading).toBeTruthy();
    });

    component.showLoading = true;
    component.ngOnChanges();
    loading.onLoadingChanged.emit(true);
    fixture.detectChanges();

  }));
});
