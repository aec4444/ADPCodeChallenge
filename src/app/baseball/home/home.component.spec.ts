import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { AdpUiComponentsModule } from '@adp/uiComponents';

import { HomeComponent } from './home.component';
import { LeagueListComponent } from '../league-list/league-list.component';
import { TeamListComponent } from '../team-list/team-list.component';
import { BaseballAPIConfiguration } from '../models/baseball-api-configuration';
import { LeagueInfo } from '../models/league-info';
import { TeamInfo } from '../models/team-info';
import { of } from 'rxjs';


@Component({
  selector: 'app-test-dummy',
  template: '<p></p>'
})
class DummyComponent {
}

const configreTestingModule = (paramMapGetFn: Function) => {
  TestBed.configureTestingModule({
    declarations: [
      HomeComponent,
      LeagueListComponent,
      TeamListComponent,
      DummyComponent
    ],
    imports: [
      AdpUiComponentsModule,
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([
        {
          path: 'edit/:id',
          component: DummyComponent
        }, {
          path: 'list',
          component: HomeComponent
        }, {
          path: 'list/:lid/:tid',
          component: HomeComponent
        }
      ])
    ],
    providers: [
      { provide: BaseballAPIConfiguration, useValue: { baseUrl: 'http://test.com', apiKey: 'test'}},
      { provide: ActivatedRoute, useValue: { paramMap: of({ get: paramMapGetFn})}}
    ]
  })
  .compileComponents();
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    configreTestingModule((key) => null);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select league', () => {
    // dummy league
    const league: LeagueInfo = {
      idLeague: '1',
      strLeague: 'league',
      strSport: 'Baseball',
      strLeagueAlternate: 'Alternate'
    };

    component.leagueSelected(league);
    expect(component.league.strLeague).toBe(league.strLeague);
  });

  it('should select team and change route', fakeAsync(() => {
    const router = TestBed.get(Router);
    const location: Location = TestBed.get(Location);

    const team: TeamInfo = {
      idTeam: 'id'
    };
    component.teamSelected(team);
    tick(); // wait for promises
    expect(location.path()).toBe('/edit/id');
  }));
});

describe('HomeComponent w/ route params', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    configreTestingModule((key) => key);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get league and team id', async(() => {
    component.ngOnInit();
    expect(component['leagueId']).toBe('lid');
    expect(component['teamId']).toBe('tid');
  }));
});
