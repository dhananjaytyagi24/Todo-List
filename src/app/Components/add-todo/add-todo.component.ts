import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/TodoModel';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  @Output() addTodo = new EventEmitter<Todo>();

  title = '';
  description = '';

  onSubmit(){
    let todo: Todo = {
      id: 10,
      title: this.title,
      description: this.description,
      isActive: true
    };

    this.addTodo.emit(todo);
  }
}
