import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/TodoModel';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent {

  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter<Todo>();

  deleteTodoMethod(todo: Todo){
    this.deleteTodo.emit(todo);
  }

}
