import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employees-list/employee';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
    selector: 'employee-form',
    templateUrl: './employee-form.html',
})
export class EmployeeForm
{

    @Input() employee: Employee;
    @Output() employeeFormReturn: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    public employeeFormGroup: FormGroup = new FormGroup(
        {

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

    constructor()
    {
    }

    ngOnInit()
    {

        Object.keys(this.employee).forEach(property =>
        {
            if (property != 'id')
            {
                this[property].setValue(this.employee[property])
            }
            
        });

        this.employeeFormReturn.emit(this.employeeFormGroup);
        
    }

    get departament()
    {
        return this.employeeFormGroup.get('departament');
    }

    get firstName()
    {
        return this.employeeFormGroup.get('firstName');
    }

    get secondName()
    {
        return this.employeeFormGroup.get('secondName');
    }

    get middleName()
    {
        return this.employeeFormGroup.get('middleName');
    }

    get dateOfBirth()
    {
        return this.employeeFormGroup.get('dateOfBirth');
    }

    get dateOfEmployment()
    {
        return this.employeeFormGroup.get('dateOfEmployment');
    }

    get salary()
    {
        return this.employeeFormGroup.get('salary');
    }

    TranslateErrorsToMessage()
    {
        var errors = this.getFormValidationErrors()
        if (errors)
        {
            var messages = [];
            for (var error of errors)
            {
                switch (error.keyError)
                {
                    case 'required':
                        messages.push({ key: error.key, messsage: `${BasicTranslation[error.key]} не может быть пустым!` });
                        break;
                    case 'min':
                        messages.push({ key: error.key, messsage: `${BasicTranslation[error.key]} должна быть больше ${error.errValue.min}` });
                        break;
                }
            }
        }
        return messages;
    }

    getFormValidationErrors()
    {
        var errors = [];
        Object.keys(this.employeeFormGroup.controls).forEach(key =>
        {
            const controlErrors: ValidationErrors = this.employeeFormGroup.get(key).errors;
            if (controlErrors != null)
            {
                Object.keys(controlErrors).forEach(keyError =>
                {
                    errors.push({ key: key, keyError: keyError, errValue: controlErrors[keyError]})
                });
            }
        });
        return errors;
    }

    public emitData()
    {
        if (this.employeeFormGroup.valid)
        {
            this.employeeFormReturn.emit(this.employeeFormGroup);
        }
    }
}

export enum BasicTranslation
{
    "firstName" = "Имя",
    "secondName" = "Фамилия",
    "middleName" = "Отчество",
    "departament" = "Отдел",
    "dateOfBirth" = "Дата рождения",
    "dateOfEmployment" = "Дата устройства",
    "salary" = "Зарплата",

}