import { Component, ViewChild, ViewContainerRef } from "@angular/core";

@Component({
  selector: "[c8y-add-bookmark]",
  template: `
    <ng-template #template>
      <li>
        <button
          title="Bookmark device"
          class="btn btn-link"
        >
          <i [c8yIcon]="'star'"></i>
          Bookmark device
        </button>
      </li>
    </ng-template>
  `,
})
export class AddBookmarkComponent {
  @ViewChild("template", { static: true }) template;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }
}
