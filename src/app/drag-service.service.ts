import { Injectable } from '@angular/core';
import { Item } from './source-data/Item';

type sourceType = 'outside' | 'inside';

@Injectable({
  providedIn: 'root',
})
export class DragServiceService {
  dragItem: Item | undefined | null;

  source?: sourceType;

  constructor() {}
}
