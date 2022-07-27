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
export class ModalAdd extends ModalWindow {

    returnData: EmployeeFormResponse = new EmployeeFormResponse();
    formGroup: FormGroup;
    placeHolderEmployee: Employee = new Employee();

    constructor() {
        super();
    }


    ngOnInit() {

    }

    public saveData(formGroup: FormGroup) {
        this.formGroup = formGroup;
        if (formGroup.valid) {
            this.returnData.employee = formGroup.value;
        }
    }

  

    public confirm() {
        this.returnData.modalResult = ModalResult.confirm;
        this.returnData.modalType = ModalType.add;
        this.modalResponse.emit(this.returnData)
    }

    public close() {
        this.returnData.modalResult = ModalResult.close;
        this.returnData.modalType = ModalType.add;
        this.modalResponse.emit(this.returnData);
    }
}