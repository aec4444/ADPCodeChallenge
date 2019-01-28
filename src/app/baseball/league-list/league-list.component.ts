import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BaseballDataService } from '../baseball-data.service';
import { Observable } from 'rxjs';
import { LeagueInfo } from '../models/league-info';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {
  @Output() leagueClicked = new EventEmitter<LeagueInfo>();
  leagues$: Observable<LeagueInfo[]>;
  leagueSelected: LeagueInfo;

  constructor(
    private dataService: BaseballDataService
  ) { }

  ngOnInit() {
    this.leagues$ = this.dataService.getLeagues();
  }

  /**
   * Is this league selected by the user?
   * @param league the league to check
   */
  isLeagueSelected(league: LeagueInfo) {
    return (
      this.leagueSelected !== undefined &&
      this.leagueSelected !== null &&
      this.leagueSelected.strLeague === league.strLeague
    );
  }

  /**
   * Select this league
   * @param league The league that was clicked
   */
  leagueClick(league: LeagueInfo) {
    this.leagueSelected = league;
    this.leagueClicked.emit(this.leagueSelected);
  }
}
