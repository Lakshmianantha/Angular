import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  Data=[{language:'c#',discover:'Anders Hejlsberg'},
  {language:'Python',discover:'guido van Rossum'},
   {language:'C',discover:'Dennis Ritchie'}, 
   {language:'java',discover:'james Gosling'}
]
}
