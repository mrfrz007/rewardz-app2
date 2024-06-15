import { Component } from '@angular/core';
import { REWARDS } from '../mock-data';
import { Reward } from '../rewradz-model';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  rewards: Reward[] = REWARDS;
  order: string | undefined;

  sortRewards(order: string) {
    this.order = order;
  }
  apply() {
    this.rewards.sort((a, b) => {
      if (this.order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }
}
