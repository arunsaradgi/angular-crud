import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() OnDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() OnToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}

  deleteItem(task: Task) {
    this.OnDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.OnToggleReminder.emit(task);
  }
}
