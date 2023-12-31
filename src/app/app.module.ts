import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SourceDataComponent } from './source-data/source-data.component';
import { DestinationDataComponent } from './destination-data/destination-data.component';

import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { DragDropModule } from 'primeng/dragdrop';
import { OnDragHoverDirective } from './on-drag-hover.directive';

@NgModule({
  declarations: [AppComponent, SourceDataComponent, DestinationDataComponent, OnDragHoverDirective],
  imports: [BrowserModule, ButtonModule, ListboxModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
