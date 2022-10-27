import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericInputsComponent } from './generic-inputs/generic-inputs.component';
import { ImagineCommentComponent } from './imagine-comment/imagine-comment.component';

const routes: Routes = [
  { path: 'input', component: GenericInputsComponent },
  { path: '', component: GenericInputsComponent },
  { path:'imaging', component: ImagineCommentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
