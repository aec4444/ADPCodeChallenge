import { Component, OnInit, ViewChild } from '@angular/core';
import { LeagueInfo } from '../models/league-info';
import { TeamInfo } from '../models/team-info';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LeagueListComponent } from '../league-list/league-list.component';
import { TeamListComponent } from '../team-list/team-list.component';

/**
 * Home Component to show the leagues and teams
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  league: LeagueInfo;
  team: TeamInfo;
  private leagueId: string;
  private teamId: string;

  @ViewChild(LeagueListComponent) leagueListComponent: LeagueListComponent;
  @ViewChild(TeamListComponent) teamListComponent: TeamListComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.leagueId = paramMap.get('lid');
      this.teamId = paramMap.get('tid');

      if (this.leagueId !== undefined && this.leagueId !== null && this.leagueId !== '') {
        // get the list of leagues
        this.leagueListComponent.leagueSelected = {
          strLeague: this.leagueId
        };
        this.leagueSelected(this.leagueListComponent.leagueSelected);

        if (this.teamId !== undefined && this.teamId !== null && this.teamId !== '') {
          this.teamListComponent.teamSelected = {
            idTeam: this.teamId
          };
        }
      }
    });
  }

  leagueSelected(league: LeagueInfo) {
    this.league = league;
  }

  teamSelected(team: TeamInfo) {
    this.router.navigate(['edit', team.idTeam]);
  }
}
