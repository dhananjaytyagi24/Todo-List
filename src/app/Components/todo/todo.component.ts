import { Component, Input, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/TodoModel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() newTodo: Todo;

  todos: Todo[];

  constructor(){
    this.todos = [
      {
        'id' : 1,
        'description' : 'Description',
        'title' : 'Title',
        'isActive': true
      },
      {
        'id' : 2,
        'description' : 'Description2',
        'title' : 'Title2',
        'isActive': true
      },
      {
        'id' : 3,
        'description' : 'Description3',
        'title' : 'Title3',
        'isActive': true
      }
    ];
  }

  ngOnChanges(changes: SimpleChanges){
    if (this.newTodo != null) {
      this.todos.push(this.newTodo);
      console.log(changes)
    }
  }  

  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
