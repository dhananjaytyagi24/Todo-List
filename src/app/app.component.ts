import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from './TodoModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTodoToBeSentToChild: Todo;

  title = 'Todo-List';

  addTodo(todo: Todo){
    this.newTodoToBeSentToChild = todo;
  }
}
