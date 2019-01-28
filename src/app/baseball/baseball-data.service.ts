
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, delay, flatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { BaseballAPIConfiguration } from './models/baseball-api-configuration';
import { Leagues } from './models/leagues';
import { LeagueInfo } from './models/league-info';
import { TeamInfo } from './models/team-info';
import { encodeUriFragment } from '@angular/router/src/url_tree';
import { Teams } from './models/teams';

/**
 * Provide data from theSportsDb.com
 */
@Injectable({
  providedIn: 'root'
})
export class BaseballDataService {
  constants: {
    baseball: 'Baseball'
  };

  // maintain a list of items that are saved here.
  // this is here to SIMULATE SAVE so users can see the changes
  // in a real production app, this would not exist.
  savedTeamList: TeamInfo[] = [];

  constructor(
    private http: HttpClient,
    private config: BaseballAPIConfiguration
  ) { }

  //#region Helper functions
  private buildUrl(route: string): string {
    return `${this.config.baseUrl}/${this.config.apiKey}/${route}`;
  }
  //#endregion

  /**
   * Return a list of leagues that pertain to baseball only
   */
  getLeagues(): Observable<LeagueInfo[]> {
    const url = this.buildUrl('all_leagues.php');
    const leagueName = 'Baseball';

    return this.http
      .get<Leagues>(url)
      .pipe(
        map(result => result.leagues.filter(l => l.strSport === leagueName))
      );
  }

  /**
   * Get all teams in the league
   * @param leagueName league name
   */
  getTeamsPerLeague(leagueName: string): Observable<TeamInfo[]> {
    const url = this.buildUrl('search_all_teams.php');
    const httpParam = new HttpParams().set('l', leagueName);

    return this.http
      .get<Teams>(url, {params: httpParam})
      .pipe(
        map(result => result.teams.map(item => this.simulateGet(item.idTeam) || item))
      );
  }

  /**
   * Get a team by their id
   * @param idTeam Team ID
   */
  getTeam(idTeam: string): Observable<TeamInfo> {
    const url = this.buildUrl('lookupteam.php');
    const httpParam = new HttpParams().set('id', idTeam);

    return this.http
      .get<Teams>(url, {params: httpParam})
      .pipe(
        map(result => result.teams === undefined || result.teams === null || result.teams.length === 0 ? <TeamInfo>{} : result.teams[0]),
        map(result => this.simulateGet(result.idTeam) || result) // if we have in our cache, return from the cache
      );
  }

  /**
   * Simulate a save so we can merge this list with the results from the API to show the results.
   * This is only necessary because we aren't saving to a real API/DB
   * @param team Team to save
   */
  private simulateSave(team: TeamInfo) {
    // see if the team is already on the list
    const foundTeam = this.simulateGet(team.idTeam);

    if (foundTeam !== undefined) {
      foundTeam.strTeam = team.strTeam;
      foundTeam.strManager = team.strManager;
    } else {
      this.savedTeamList.push(team);
    }
  }

  /**
   * Find a team in our cache so we can make it look like it was saved to the DB
   * @param id team to search for
   */
  private simulateGet(id: string): TeamInfo {
    const foundTeam = this.savedTeamList.filter(item => {
      return item.idTeam === id;
    });

    return foundTeam === undefined || foundTeam === null || foundTeam.length === 0 ? undefined : foundTeam[0];
  }

  /**
   * Simulate saving a team because there isn't an endpoint to do it
   * @param team team to save
   */
  saveTeam(team: TeamInfo): Observable<TeamInfo> {
    this.simulateSave(team);

    return of(team).pipe(
      delay(1000) // 1 second delay to simulate saving
    );
  }
}
