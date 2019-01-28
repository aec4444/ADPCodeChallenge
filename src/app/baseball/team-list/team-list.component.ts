import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { TeamInfo } from '../models/team-info';
import { BaseballDataService } from '../baseball-data.service';
import { LeagueInfo } from '../models/league-info';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit, OnChanges {
  @Output() teamClicked = new EventEmitter<TeamInfo>();
  @Input() league: LeagueInfo;

  teams$: Observable<TeamInfo[]>;
  teamSelected: TeamInfo;

  constructor(
    private dataService: BaseballDataService
  ) { }

  ngOnInit() {
    this.loadTeams();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['league']) {
      this.loadTeams();
    }
  }

  /**
   * Is this team selected by the user?
   * @param team the team to check
   */
  isTeamSelected(team: TeamInfo) {
    return (
      this.teamSelected !== undefined &&
      this.teamSelected !== null &&
      this.teamSelected.idTeam === team.idTeam
    );
  }

  /**
   * Select this team
   * @param team The team that was clicked
   */
  teamClick(team: TeamInfo) {
    this.teamSelected = team;
    this.teamClicked.emit(this.teamSelected);
  }

  /**
   * Load all leagues
   */
  loadTeams() {
    if (this.league !== undefined && this.league !== null) {
      this.teams$ = this.dataService.getTeamsPerLeague(this.league.strLeague);
    }
  }
}
