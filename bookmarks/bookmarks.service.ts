import { Injectable } from '@angular/core';
import { NavigatorNode } from '@c8y/ngx-components';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {
  get() {
    return new NavigatorNode({
      label: 'Bookmarks',
      icon: 'bookmark',
      priority: -1000
    });
  }
}