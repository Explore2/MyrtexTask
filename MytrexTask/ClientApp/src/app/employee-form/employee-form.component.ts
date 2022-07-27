import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employees-list/employee';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
    selector: 'employee-form',
    templateUrl: './employee-form.html',
})
export class EmployeeForm {

    @Input() employee: Employee;
    @Output() returnEmployee: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    public employeeFormGroup: FormGroup = new FormGroup({
        departament: new FormControl('', [
            Validators.required,
        ]),
        firstName: new FormControl('', [
            Validators.required,
        ]),
        secondName: new FormControl('', [
            Validators.required,
        ]),
        middleName: new FormControl('', [
            Validators.required,
        ]),
        dateOfBirth: new FormControl('', [
                Validators.required
            ]),
        dateOfEmployment: new FormControl('', [
            Validators.required,
        ]),
        salary: new FormControl('', [
            Validators.min(0),
            Validators.required,
          
        ])
    });


    tempEmployee: Employee = new Employee();
    constructor() {
    }

    ngOnInit() {
        this.tempEmployee = JSON.parse(JSON.stringify(this.employee));
        if (this.employee != null && this.employee != undefined) {
            this.departament.setValue(this.employee.departament);
            this.firstName.setValue(this.employee.firstName);
            this.secondName.setValue(this.employee.secondName);
            this.middleName.setValue(this.employee.middleName);
            this.dateOfBirth.setValue(this.employee.dateOfBirth);
            this.dateOfEmployment.setValue(this.employee.dateOfEmployment);
            this.salary.setValue(this.employee.salary);
        }
        this.returnEmployee.emit(this.employeeFormGroup);
        
    }

    get departament(){
        return this.employeeFormGroup.get('departament');
    }

    get firstName(){
        return this.employeeFormGroup.get('firstName');
    }

    get secondName(){
        return this.employeeFormGroup.get('secondName');
    }

    get middleName(){
        return this.employeeFormGroup.get('middleName');
    }

    get dateOfBirth(){
        return this.employeeFormGroup.get('dateOfBirth');
    }

    get dateOfEmployment(){
        return this.employeeFormGroup.get('dateOfEmployment');
    }

    get salary(){
        return this.employeeFormGroup.get('salary');
    }


    errors() {
        var validationErrors = this.getFormValidationErrors()
        if (validationErrors) {
            var text = [];
            for (var errs of validationErrors) {
                switch (errs.keyError) {
                    case 'required':
                        text.push({ key: errs.key, mes: `${BasicTranslation[errs.key]} не может быть пустым!` });
                        break;
                    case 'min':
                        text.push({ key: errs.key, mes: `${errs.key} должна быть больше ${errs.errValue.min}` });
                        break;
                }
            }
        }
        return text;
    }


    getFormValidationErrors() {
        var j = [];
        Object.keys(this.employeeFormGroup.controls).forEach(key => {
            const controlErrors: ValidationErrors = this.employeeFormGroup.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach(keyError => {
                    j.push({ key: key, keyError: keyError, errValue: controlErrors[keyError]})
                });
            }
        });
        return j;
    }


    public emitData() {
        if (this.employeeFormGroup.valid) {
            this.returnEmployee.emit(this.employeeFormGroup);
        }
    }
}


export enum BasicTranslation {
    "firstName" = "Имя",
    "secondName" = "Фамилия",
    "middleName" = "Отчество",
    "departament" = "Отдел",
    "dateOfBirth" = "Дата рождения",
    "dateOfEmployment" = "Дата устройства",
    "salary" = "Зарплата",

}