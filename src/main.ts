import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
    <div class="container">
  <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)">
  
    <button class="btn btn-submit" (click)="onSubmit(form.value)" type="button">Submit<span class="glyphicon glyphicon-send"></span>
    </button>
    <br/>
    <br/>
    <div class="form-group">
      <div class="col-sm-10 inputGroupContainer">
        <div *ngFor="let option of options; let index=index" class="spacer">
          <div class="input-group">
              <textarea
                cdkTextareaAutosize
                name="option"
                formControlName="options"
                [value]="options[index].value"
                type="text" class="form-control" rows="4" placeholder="Type your text here"
              >
            </textarea>
          </div>
        </div>
      </div>

      <div class="row"></div>

      <div class="col-sm-12 pull-right">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <button class="btn btn-warning" type="button" (click)="add()">+<span class="glyphicon glyphicon-send"></span>
          </button>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  </form>
</div>

  `,
})
export class App {
  name = 'Angular';
  options = [{ value: '' }];
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      options: new FormControl(),
    });
  }

  add() {
    const input = this.form.controls.options.value;
    this.options.push({ value: input });
  }

  onSubmit(form: any) {
    alert(JSON.stringify(this.options))
    console.log(this.options)
  }
}

bootstrapApplication(App);
