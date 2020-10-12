import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThreadService } from '../services/thread.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  @Input() permalink: string | null = null;
  @Output() showThread = new EventEmitter<boolean>();
  thread: any = [];

  constructor(private postService:ThreadService) { }

  ngOnInit(): void {
    this.postService.getData(this.permalink).subscribe(response => {
      this.thread = response;
      console.log(this.thread)
    });
  }

  closeThread() {
    this.showThread.emit(false);
  }

}
