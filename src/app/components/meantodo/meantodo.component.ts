import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../classes/Todo';

@Component({
    moduleId: module.id,
  selector: 'meantodo',
  templateUrl: 'meantodo.component.html',
  providers: [TodoService]
})

export class MeantodoComponent implements OnInit{
  
  todos: Todo[];

  constructor(private _todoService: TodoService){
    

  }

  ngOnInit (){

    this.todos = [];
    this._todoService.getTodos()
      .subscribe(todos => {
        this.todos = todos;
      })

  }

}
