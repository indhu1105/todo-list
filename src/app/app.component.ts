import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { CompileTemplateMetadata } from '@angular/compiler';
import { Key } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todo:Array<any>=[];
  todoList:string
 completeList:boolean
 priority:boolean
   key1='todo'
    tasktitle='';
    prior:boolean
    temp:string
    len=this.todo.length;
    constructor()
    {
 this.todo=JSON.parse(localStorage.getItem(this.key1));
    }
   add() {
     console.log("hii");
     this.todo.push(
       {todoList:this.tasktitle,
        completeList:false,
        priority:this.prior
      });
     this.clearTaskTitle(this.tasktitle);
     this.prior=false;
    this.reuse();
  }
  markAsComplete(i)
  {
    this.todo[i].completeList=! this.todo[i].completeList[i];
    this.reuse();
  }
  remove(i)
  {
    this.todo.splice(i,1);
    this.reuse();
  }
clearTaskTitle(tasktitle)
{
this.tasktitle=" ";
}
  reuse()
  {
    localStorage.setItem(this.key1,JSON.stringify(this.todo));
  }
  clearAll()
  {
    this.todo.splice(0,this.todo.length);
    localStorage.removeItem(JSON.stringify(this.todo));
    this.reuse();
  }
  clearMarked()
  {
    for(let i=0;i<this.todo.length;i++)
    {
    if(this.todo[i].completeList==true)
    {
      this.todo.splice(i,1);
         this.reuse();
         i--;
    } 
    }
  }
  
 
  
}
