import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Reward } from '../rewradz-model';
import { REWARDS } from '../mock-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  rewards: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalItems: number = 0;
  categories: { name: string; checked: boolean }[] = [
    { name: 'e-Voucher', checked: true },
    { name: 'Products', checked: false },
    { name: 'Evergreen', checked: false },
    { name: 'Fashion & Retail', checked: false },
  ];

  constructor() {}

  ngOnInit(): void {
    this.fetchRewards();
  }
  fetchRewards() {
    this.rewards = REWARDS;

    this.totalItems = this.rewards.length;
  }
  sortRewards(order: string): void {
    this.rewards.sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    this.sidenav.close();
  }

  changePageSize(event: any) {
    this.itemsPerPage = event.target.value;
    this.currentPage = 1;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get paginatedRewards(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.rewards.slice(startIndex, startIndex + this.itemsPerPage);
  }
}
