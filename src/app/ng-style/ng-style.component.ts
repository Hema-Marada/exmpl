import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
people:any[]=[{
  "Name":"Hema Marada",
  "City":"Vijayawada"
},
{
  "Name":"Vandana",
  "City":"Srikakulam"
},
{
  "Name":"Barnabas",
  "City":"Kakinada"
},
{
  "Name":"Chinna",
  "City":"Pitapuram"
},
{
  "Name":"Vineetha",
  "City":"East Godavari"
}]
}
