import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BaseballDataService } from './baseball-data.service';
import { BaseballAPIConfiguration } from './models/baseball-api-configuration';


describe('BaseballDataService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: BaseballAPIConfiguration, useValue: { baseUrl: 'http://test.com', apiKey: 'test'}}
      ]
    });

    // get mock http
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: BaseballDataService = TestBed.get(BaseballDataService);
    expect(service).toBeTruthy();
  });

  it('should return the right url', () => {
    const service: BaseballDataService = TestBed.get(BaseballDataService);
    expect(service['buildUrl']('all_leagues.php')).toBe('http://test.com/test/all_leagues.php');
  });

  it('should return leagues', (() => {
    const service: BaseballDataService = TestBed.get(BaseballDataService);
    const url = service['buildUrl']('all_leagues.php');

    service.getLeagues().subscribe(data => {
      expect(data).toBeDefined();
      expect(data.length).toBe(1);
    });

    // mock the data
    httpMock.expectOne(url).flush({
      leagues: [
        {
          'idLeague': '1',
          'strLeague': 'MLB',
          'strSport': 'Baseball',
          'strLeagueAlternate': 'MLB'
        }
      ]
    });
  }));

  it('should return team for a given league', () => {
    const service: BaseballDataService = TestBed.get(BaseballDataService);
    const url = service['buildUrl']('search_all_teams.php?l=mlb');

    service.getTeamsPerLeague('mlb').subscribe(data => {
      expect(data).toBeDefined();
      expect(data.length).toBe(1);
    });

    httpMock.expectOne(url).flush({
      teams: [
        {
          'strName': 'Test'
        }
      ]
    });

  });

  it('should return a team and it\'s found', () => {
    const service: BaseballDataService = TestBed.get(BaseballDataService);
    const url = service['buildUrl']('lookupteam.php?id=id');

    service.getTeam('id').subscribe(data => {
      expect(data).toBeDefined();
      expect(data.idTeam).toBeDefined();
      expect(data.idTeam).toBe('id');
    });

    httpMock.expectOne(url).flush({
      teams: [
        {
          'idTeam': 'id'
        }
      ]
    });

  });

  it('should return a team and it\'s not found', () => {
    const service: BaseballDataService = TestBed.get(BaseballDataService);
    const url = service['buildUrl']('lookupteam.php?id=id');

    service.getTeam('id').subscribe(data => {
      expect(data).toBeDefined();
      expect(data.idTeam).toBeUndefined();
    });

    httpMock.expectOne(url).flush({
      teams: []
    });

  });

  it('should simulate save the first time', () => {
    const service: BaseballDataService = TestBed.get(BaseballDataService);
    service['simulateSave']({strTeam: 'a', strManager: 'a', idTeam: '1'});

    expect(service.savedTeamList).toBeDefined();
    expect(service.savedTeamList.length).toBe(1);
  });

  it('should simulate save to update', () => {
    const service: BaseballDataService = TestBed.get(BaseballDataService);
    service['simulateSave']({strTeam: 'a', strManager: 'a', idTeam: '1'});
    service['simulateSave']({strTeam: 'ab', strManager: 'a', idTeam: '1'});

    expect(service.savedTeamList).toBeDefined();
    expect(service.savedTeamList.length).toBe(1);
    expect(service.savedTeamList[0].strTeam).toBe('ab');
  });

  it('should save the team', async(() => {
    const service: BaseballDataService = TestBed.get(BaseballDataService);
    service.saveTeam({strTeam: 'a', strManager: 'a', idTeam: '1'}).subscribe(data => {
      expect(data.idTeam).toBe('1');
      expect(service.savedTeamList.length).toBe(1);
    });
  }));
});
