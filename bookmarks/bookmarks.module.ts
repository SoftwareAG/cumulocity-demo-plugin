import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookmarksService } from "./bookmarks.service";
import { HOOK_NAVIGATOR_NODES } from "@c8y/ngx-components";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [
    BookmarksService,
    { provide: HOOK_NAVIGATOR_NODES, useClass: BookmarksService, multi: true },
  ],
})
export class BookmarksModule {}
