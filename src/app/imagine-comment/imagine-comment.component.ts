import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagine-comment',
  templateUrl: './imagine-comment.component.html',
  styleUrls: ['./imagine-comment.component.scss']
})
export class ImagineCommentComponent implements OnInit {
  sentence: string | undefined;
  stepsImagine=9;
  totSteps = 10;

  componentWidth='0%';
  constructor() { }

  ngOnInit(): void {
    let percentage=100/this.totSteps*this.stepsImagine;
    this.componentWidth=percentage+'%';
  }
  
  onSubmit() {

  }
}
