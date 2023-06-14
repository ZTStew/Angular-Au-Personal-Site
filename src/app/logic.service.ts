import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor() { }

  getValues() {
    return ["value a", "value c", "value z"];
  }

}
