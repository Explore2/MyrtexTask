import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalWindow } from '../modal-window/modal-window';
import { ModalResult, ModalType, ModalResponse } from '../modal-window/modal-response';
import { ModalEditResponse } from './modal-edit-response';
import { Employee } from '../employees-list/employee';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'modal-edit',
    templateUrl: './modal-edit.html',
})
export class ModalEdit extends ModalWindow {

    @Input() employee: Employee;
    returnData : ModalEditResponse = new ModalEditResponse();
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
        this.returnData.modalType = ModalType.edit;
        this.returnData.employeeId = this.employeeId;
        this.returnData.employee.id = this.employee.id;
        this.modalResponse.emit(this.returnData)
    }
    public close() {
        this.returnData.modalResult = ModalResult.close;
        this.returnData.modalType = ModalType.edit;
        this.returnData.employeeId = this.employeeId
        this.modalResponse.emit(this.returnData);
    }
}