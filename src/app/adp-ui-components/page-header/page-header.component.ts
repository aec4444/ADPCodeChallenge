import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { LoadingIndicatorService } from '../loading-indicator/loading-indicator.service';
import { Subscription } from 'rxjs';

/**
 * Simple component to highlight transclusion and to show working indicator on all pages
 */
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent implements OnInit, OnChanges, OnDestroy {
  @Input() showLoading = true; // should the loading indicator be shown

  isLoading = false; // initial state we aren't loading anything
  loadingSubscription: Subscription; // keep track of when we are loading

  constructor(
    private loading: LoadingIndicatorService
  ) {
    this.initializeLoadingIndicator();
  }

  ngOnInit() {

  }

  /**
   * When changes occur to this component, reset the loading indicator
   */
  ngOnChanges() {
    this.initializeLoadingIndicator();
  }

  /**
   * When this component is destroyed, destroy
   */
  ngOnDestroy() {
    this.destroyLoading();
  }

  /**
   * Unsubscribe to the loading subscription when we are done
   */
  destroyLoading() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
      this.loadingSubscription = undefined;
    }
  }

  /**
   * Initialize Loading Subscription
   */
  initializeLoadingIndicator() {
    if (this.showLoading) {
      if (this.loadingSubscription === undefined) {
        this.loadingSubscription = this.loading.onLoadingChanged.subscribe((loading: boolean) => {
          // place in setTimeout to remove issue with: ExpressionChangedAfterItHasBeenCheckedError.
          setTimeout(() => {
            this.isLoading = loading;
          }, 0);
        });
      }
    } else {
      this.destroyLoading();
    }
  }
}
