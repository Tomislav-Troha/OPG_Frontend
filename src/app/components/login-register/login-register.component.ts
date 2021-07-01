import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from '../../login';
import { ServiceService } from '../../-service.service';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  @Output() onAdd: EventEmitter<Login> = new EventEmitter();
  email: string = '';
  lozinka: string = '';
  ime: string = '';
  prezime: string = '';
  form: any;
  register: any;
  feedback: boolean = false;
  feedback1: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        email: new FormControl(this.email, [
          Validators.required,
          Validators.email,
        ]),
        lozinka: new FormControl(this.lozinka, [
          Validators.minLength(6),
          Validators.required,
        ]),
      },
      { updateOn: 'submit' }
    );

    this.register = new FormGroup(
      {
        email: new FormControl(this.email, [
          Validators.required,
          Validators.email,
        ]),
        lozinka: new FormControl(this.lozinka, [
          Validators.minLength(6),
          Validators.required,
        ]),
        ime: new FormControl(this.ime, [Validators.required]),
        prezime: new FormControl(this.prezime, [Validators.required]),
      },
      { updateOn: 'submit' }
    );
  }

  get Email() {
    return this.form.get('email');
  }
  get Lozinka() {
    return this.form.get('lozinka');
  }

  get EmailReg() {
    return this.register.get('email');
  }
  get LozinkaReg() {
    return this.register.get('lozinka');
  }
  get Ime() {
    return this.register.get('ime');
  }
  get Prezime() {
    return this.register.get('prezime');
  }

  onSubmitlogin(value: any, LoginForm: FormControl) {
    //console.log(value);
    if (!this.form.valid || LoginForm.status == 'INVALID') {
      //console.log('Submit', LoginForm.status);
      this.feedback = true;
    } else {
      this.feedback = false;
      console.log('Email:', value.email, 'Lozinka:', value.lozinka);
    }
  }

  onSubmitRegister(value: any, LoginForm: FormControl) {
    //console.log(value);
    let id;
    if (!this.register.valid || LoginForm.status == 'INVALID') {
      //console.log('Submit', LoginForm.status);
      this.feedback1 = true;
    } else {
      this.feedback1 = false;

      let newReg = {
        ime: value.ime,
        prezime: value.prezime,
        email: value.email,
        lozinka: value.lozinka,
        id: id,
      };

      this.serviceService.register(newReg).subscribe(() => {
        console.log(newReg);
      });
      console.log(newReg);
    }
  }
}
