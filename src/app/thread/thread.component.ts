import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  @Input() permalink: string = '';
  @Output() showThread = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeThread() {
    this.showThread.emit(false);
  }

}
