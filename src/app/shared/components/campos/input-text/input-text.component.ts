import { ValidarCamposService } from './../validar-campos.service';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'dio-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() titulo: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  constructor(public validacao: ValidarCamposService) { }

 get formControl(): AbstractControl {
   return this.formGroup.controls[this.controlName];
 }

}
