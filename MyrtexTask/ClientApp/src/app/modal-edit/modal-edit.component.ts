import { Component, Input } from '@angular/core';
import { ModalWindow } from '../modal-window/modal-window';
import { ModalResult, ModalType } from '../modal-window/modal-response';
import { ModalEditResponse } from './modal-edit-response';
import { Employee } from '../employees-list/employee';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'modal-edit',
    templateUrl: './modal-edit.html',
})
export class ModalEdit extends ModalWindow
{

    @Input() employee: Employee;
    modalResponseData : ModalEditResponse = new ModalEditResponse();
    formGroup: FormGroup;

    constructor()
    {
        super();
    }

    ngOnInit()
    {
        this.modalResponseData.modalType = ModalType.edit;
    }

    public saveData(formGroup: FormGroup)
    {
        this.formGroup = formGroup;

        if (formGroup.valid)
        {
            this.modalResponseData.employee = formGroup.value;
        }
        this.modalResponseData.employee.id = this.employee.id;
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