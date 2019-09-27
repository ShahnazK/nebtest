import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { DASHBOARD_SIDE_MENU_ITEMS } from '../eclair-dashboard-menu';

@Component({
  selector: 'el-dashboard-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuItems = DASHBOARD_SIDE_MENU_ITEMS;

}
