import { Component } from '@angular/core';
import { CompileTemplateMetadata } from '@angular/compiler';
import { Key } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todoList:Array<string>=[];
  completeList:Array<boolean>=[];
  priority:Array<string>=[];
   key1='todo'
    key2='complete'
    tasktitle='';
    
  
 
   add(tasktitle) {
     console.log("hii");
     this.todoList.push(tasktitle);
     this.completeList.push(false);
     this.priority.push('0');
     this.clearTaskTitle(tasktitle);
    this.reuse();
  }
  markAsComplete(i)
  {
    this.completeList[i]=!this.completeList[i];
    this.reuse();
  }
  remove(i)
  {
    this.todoList.splice(i,1);
    this.completeList.splice(i,1);
    this.reuse();
  }
clearTaskTitle(tasktitle)
{
this.tasktitle=" ";
}
  reuse()
  {
    localStorage.setItem(this.key1,JSON.stringify(this.todoList));
    localStorage.setItem(this.key2,JSON.stringify(this.completeList));
  }
  clearAll()
  {
    this.todoList.splice(0,this.todoList.length);
    this.completeList.splice(0,this.completeList.length);
    this.reuse();
  }
  clearMarked()
  {
    for(let i=0;i<this.completeList.length;i++)
    {
    if(this.completeList[i]==true)
    {
         this.todoList.splice(i,1);
         this.completeList.splice(i,1);
         this.reuse();
         i--;
    } 
    }
  }
  prior(i)
  {
    this.priority[i]='1';

    if(this.priority[i]=='1')
    {
      let ele=document.getElementById("demo");
     this.priority[i]='&uarr';
    }
    console.log(this.priority[i]);
  }

  
}
