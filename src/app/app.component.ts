import { Component } from '@angular/core';
import { TodoDataService } from './Services/todo-data.service';
import { Todo } from './Classes/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private todoService: TodoDataService) {}

  onAddTodo(todo: Todo) {
    this.todoService.addTodo(todo);
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }
}
