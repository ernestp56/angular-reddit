import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThreadService } from '../../services/thread.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {
  @Input() permalink: string | null = null;
  @Output() showThread = new EventEmitter<boolean>();
  thread: any = [];
  comments: any = [];
  post: any = [];
  responses: any = [];

  constructor(private threadService: ThreadService) { }

  ngOnInit(): void {
    this.threadService.getData(this.permalink).subscribe(response => {
      this.thread = response;
      this.post = response[0].data.children[0].data;
      this.comments = response[1].data.children;
    });
  }

  closeThread(): void {
    this.showThread.emit(false);
  }

}
