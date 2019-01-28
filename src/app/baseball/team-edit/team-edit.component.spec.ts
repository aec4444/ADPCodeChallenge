import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { TeamEditComponent } from './team-edit.component';
import { AdpUiComponentsModule } from '@adp/uiComponents';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseballDataService } from '../baseball-data.service';
import { BaseballAPIConfiguration } from '../models/baseball-api-configuration';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { TeamInfo } from '../models/team-info';
import { ParamMap } from '@angular/router';
import { Location } from '@angular/common';

class NgFormMockFailed extends NgForm {
  get valid() {
    return false;
  }
}

describe('TeamEditComponent', () => {
  let component: TeamEditComponent;
  let fixture: ComponentFixture<TeamEditComponent>;

  const testTeam: TeamInfo = {
    idTeam: 'id',
    intFormedYear: '1900',
    strLeague: 'MLB',
    strManager: 'Joe Smith',
    strStadium: 'Yankee Stadium',
    strTeam: 'Team',
    strTeamShort: 'T'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TeamEditComponent
      ],
      imports: [
        AdpUiComponentsModule,
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        BaseballDataService,
        { provide: BaseballAPIConfiguration, useValue: { baseUrl: 'http://test.com', apiKey: 'test'}},
        { provide: ActivatedRoute, useValue: { paramMap: of({ get: (key) => 'id'})}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the data ngOnInit', fakeAsync(() => {
    const service = TestBed.get(BaseballDataService);
    spyOn<BaseballDataService>(service, 'getTeam').and.returnValue(
      of(testTeam)
    );

    // run onInit
    component.ngOnInit();

    expect(component.teamInfo).toBeDefined();
    expect(component.teamId).toBe('id');
    expect(component.teamInfo.idTeam).toBe('id');
  }));

  it('should handle submit invalid form', (done) => {
    component.editForm = new NgFormMockFailed(undefined, undefined);
    component.submitForm();
    done();
  });

  it('should handle submit successfully', async(() => {
    component.teamInfo = testTeam; // set to valid team

    const config: BaseballAPIConfiguration = TestBed.get(BaseballAPIConfiguration);
    config.alertDelay = 0; // so timeout fires immediately

    const service = TestBed.get(BaseballDataService);
    spyOn<BaseballDataService>(service, 'saveTeam').and.returnValue(of(testTeam));

    // we can stop test here because we test this function separately
    component.showAlertDialog = jasmine.createSpy('showAlertDialog', component.showAlertDialog);
    component.submitForm();

    expect(component.showAlertDialog).toHaveBeenCalled();
  }));

  it('should call back method', (done) => {
    const location = TestBed.get(Location);
    spyOn<Location>(location, 'back').and.callFake(() => {
      done();
    });
    component.goBack();
  });


  const runShowAlertDialogTest = (delay: number) => {
    const config: BaseballAPIConfiguration = TestBed.get(BaseballAPIConfiguration);
    config.alertDelay = delay; // so timeout fires immediately

    const router: Router = TestBed.get(Router);

    spyOn<Router>(router, 'navigate').and.callFake((path) => {
      expect(path[0]).toBe('list');
    });

    component.showAlertDialog();
  };

  it('should navigate when showing dialog 1500 delay', async(() => {
    window.setTimeout = jasmine.createSpy('setTimeout', window.setTimeout).and.callFake((fn) => {
      fn();
    });

    runShowAlertDialogTest(1500);
  }));

  it('should navigate when showing dialog 0 delay', async(() => {
    runShowAlertDialogTest(0);
  }));

});
