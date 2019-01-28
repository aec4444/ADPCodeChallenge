import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BaseballDataService } from '../baseball-data.service';
import { Observable } from 'rxjs';
import { TeamInfo } from '../models/team-info';
import { switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { BaseballAPIConfiguration } from '../models/baseball-api-configuration';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit {
  teamId: string;
  team$: Observable<TeamInfo>;
  teamInfo: TeamInfo = {};
  @ViewChild('editForm') editForm: NgForm;
  saveInProgress = false;
  showAlert = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: BaseballDataService,
    private location: Location,
    private config: BaseballAPIConfiguration,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.team$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.teamId = params.get('id');
        return this.dataService.getTeam(this.teamId);
      })
    );
    this.team$.subscribe(data => {
      this.teamInfo = data;
    });
  }

  /**
   * Submit the form, which in this case will show notification and route back to the root
   */
  submitForm() {
    if (this.editForm.valid) {
      // continue saving since this form is valid.
      this.saveTeam();
    }
  }

  goBack() {
    this.location.back();
  }

  /**
   * Save the team
   */
  saveTeam() {
    this.saveInProgress = true; // used for button indicator
    this.dataService.saveTeam(this.teamInfo).subscribe({
      next: () => {
        // show the alert before navigating from the form
        this.showAlertDialog();
      },
      complete: () => {
        this.saveInProgress = false; // remove working indicator on button
      }
    });
  }

  /**
   * Goto the list route
   */
  gotoList() {
    this.router.navigate(['list', this.teamInfo.strLeague, this.teamInfo.idTeam]);
  }

  /**
   * show an alert when save is completed.
   */
  showAlertDialog() {
    if (this.config.alertDelay === undefined || this.config.alertDelay === 0) {
      this.gotoList();
    } else {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;

        // redirect
        this.zone.run(() => this.gotoList());

      }, this.config.alertDelay);
    }
  }
}
