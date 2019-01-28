import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListComponent } from './team-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BaseballDataService } from '../baseball-data.service';
import { BaseballAPIConfiguration } from '../models/baseball-api-configuration';
import { TeamInfo } from '../models/team-info';
import { of } from 'rxjs';

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;
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
        TeamListComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        BaseballDataService,
        { provide: BaseballAPIConfiguration, useValue: { baseUrl: 'http://test.com', apiKey: 'test'}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return that the team is selected', () => {
    component.teamSelected = testTeam; // set this for the comparison
    expect(component.isTeamSelected(testTeam)).toBeTruthy();
  });

  it('should return that the team is not selected', () => {
    expect(component.isTeamSelected(testTeam)).toBeFalsy();
  });

  it('should select the team when clicked', () => {
    component.teamClick(testTeam);
    expect(component.isTeamSelected(testTeam)).toBeTruthy();
  });

  it('should not load teams when league is null', () => {
    component.loadTeams();
    expect(component.teams$).toBeUndefined();
  });

  it('should set the observable of teams', async(() => {
    const dataService = TestBed.get(BaseballDataService);

    // simulate API call
    spyOn<BaseballDataService>(dataService, 'getTeamsPerLeague').and.returnValue(of([ testTeam ]));

    // load the leagues
    component.league = {
      strLeague: 'MLB',
      strSport: 'Baseball',
      idLeague: '1',
      strLeagueAlternate: 'Alt'
    };
    component.loadTeams();

    expect(component.teams$).toBeDefined();

    component.teams$.subscribe(data => {
      expect(data).toBeDefined();
      expect(data.length).toBe(1);
    });
  }));
});
