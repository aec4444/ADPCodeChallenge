import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LeagueListComponent } from './league-list.component';
import { BaseballDataService } from '../baseball-data.service';
import { BaseballAPIConfiguration } from '../models/baseball-api-configuration';
import { LeagueInfo } from '../models/league-info';
import { of } from 'rxjs';

describe('LeagueListComponent', () => {
  let component: LeagueListComponent;
  let fixture: ComponentFixture<LeagueListComponent>;
  const testLeague: LeagueInfo = {
    strLeague: 'MLB',
    strSport: 'Baseball',
    idLeague: '1',
    strLeagueAlternate: 'Alt'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LeagueListComponent
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
    fixture = TestBed.createComponent(LeagueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return that the league is selected', () => {
    component.leagueSelected = testLeague; // set this for the comparison
    expect(component.isLeagueSelected(testLeague)).toBeTruthy();
  });

  it('should return that the league is not selected', () => {
    expect(component.isLeagueSelected(testLeague)).toBeFalsy();
  });

  it('should select the team when clicked', () => {
    component.leagueClick(testLeague);
    expect(component.isLeagueSelected(testLeague)).toBeTruthy();
  });

  it('should set the observable of leagues', async(() => {
    const dataService = TestBed.get(BaseballDataService);

    // simulate API call
    spyOn<BaseballDataService>(dataService, 'getLeagues').and.returnValue(of([ testLeague ]));

    component.ngOnInit();
    expect(component.leagues$).toBeDefined();

    component.leagues$.subscribe(data => {
      expect(data).toBeDefined();
      expect(data.length).toBe(1);
    });
  }));
});
