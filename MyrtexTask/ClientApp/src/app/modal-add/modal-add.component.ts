import { Component} from '@angular/core';
import { ModalWindow } from '../modal-window/modal-window';
import { ModalResult, ModalType} from '../modal-window/modal-response';
import { Employee } from '../employees-list/employee';
import { EmployeeFormResponse } from '../employee-form/employee-form-response';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'modal-add',
    templateUrl: './modal-add.html',
})
export class ModalAdd extends ModalWindow
{

    modalResponseData: EmployeeFormResponse = new EmployeeFormResponse();
    formGroup: FormGroup;
    placeHolderEmployee: Employee = new Employee();

    constructor()
    {
        super();
    }

    ngOnInit()
    {
        this.modalResponseData.modalType = ModalType.add;
    }

    public saveData(formGroup: FormGroup)
    {
        this.formGroup = formGroup;

        if (formGroup.valid)
        {
            this.modalResponseData.employee = formGroup.value;
        }
    }

    public confirm()
    {
        this.modalResponseData.modalResult = ModalResult.confirm;
        this.modalResponse.emit(this.modalResponseData)
    }

    public close()
    {
        this.modalResponseData.modalResult = ModalResult.close;
        this.modalResponse.emit(this.modalResponseData);
    }
}