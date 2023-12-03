import { Component, OnInit } from '@angular/core';
import { Item } from '../source-data/Item';
import { DragServiceService } from '../drag-service.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-destination-data',
  templateUrl: './destination-data.component.html',
  styleUrls: ['./destination-data.component.scss'],
})
export class DestinationDataComponent implements OnInit {
  constructor(private dragService: DragServiceService) {}
  cols!: Column[];
  options1: Item[] = [];
  options2: Item[] = [];

  startIndex: number = 0;
  startList: number = 0;

  insertOver: number = 0;

  destinationListId: number = 0;
  ngOnInit(): void {
    this.options1.push({ name: 'existing 1', id: 100 });
  }

  dragStart(index: any, startListId: number, list: Item[]) {
    console.log('Startd drag fromInside', index, startListId);
    this.dragService.dragItem = list[index];
    this.dragService.source = 'inside';
    this.startIndex = index;
    this.startList = startListId;
    //this.dragService.dragItem=
  }
  drop(event: DragEvent) {
    console.log('Drop: ', event);
  }
  dragOver(destinationLisId: number, index: number = -1) {
    console.log('Drag over: ', index);
    this.insertOver = index;
    this.destinationListId = destinationLisId;
  }

  onMouseOver(num: number) {
    console.log('Over: ', num);
  }

  dropOutside(destList: Item[]) {
    console.log('Drop from outside: ', this.dragService.dragItem);
    const srcList = this.startList === 0 ? this.options1 : this.options2;
    //this.destinationListId === 0 ? this.options1 : this.options2;

    if (this.dragService.dragItem !== null)
      this.insertToList(srcList, this.startIndex, destList, this.insertOver);

    // list.push(this.dragService.dragItem!);

    this.dragService.dragItem = null;
    //if (listId === 2) this.options2.push(this.dragService.dragItem!);
    //console.log('Event', event /* .dataTransfer?.getData('text') */);
  }
  dropInside(list: Item[], index: number) {
    console.log('Drop from inside: ', index);
    if (this.dragService.dragItem !== null)
      list.push(this.dragService.dragItem!);
    this.dragService.dragItem = null;
  }

  insertToList(
    sourceList: Item[],
    sourceIndex: number,
    destinationList: Item[],
    destinationIndex: number
  ) {
    if (this.dragService.source === 'inside') sourceList.splice(sourceIndex, 1);
    if (destinationList.length > 0)
      destinationList.splice(destinationIndex, 0, this.dragService.dragItem!);
    else destinationList.push(this.dragService.dragItem!);

    //list.splice();
  }
}
