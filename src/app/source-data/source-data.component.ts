import { Component } from '@angular/core';
import { Item } from './Item';
import { DragServiceService } from '../drag-service.service';

@Component({
  selector: 'app-source-data',
  templateUrl: './source-data.component.html',
  styleUrls: ['./source-data.component.css'],
})
export class SourceDataComponent {
  constructor(private dragService: DragServiceService) {}
  startDrag(itemId: number, drag: DragEvent) {
    console.log('Drag start from items');
    this.dragService.dragItem = this.items[itemId];
    this.dragService.source = 'outside';
    drag.dataTransfer!.effectAllowed = 'move';
  }
  items: Item[] = [
    { name: 'Testowa 1', id: 1 },
    { name: 'Testowa 2', id: 2 },
    { name: 'Testowa 3', id: 3 },
    { name: 'Testowa 4', id: 4 },
    { name: 'Testowa 5', id: 5 },
  ];
}
