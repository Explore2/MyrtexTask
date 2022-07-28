import { Component } from '@angular/core';
import { ModalWindow } from '../modal-window/modal-window';
import { ModalResult, ModalType } from '../modal-window/modal-response';
import { ModalDeleteResponse } from './modal-delete-response';

@Component({
    selector: 'modal-delete',
    templateUrl: './modal-delete.html',
})
export class ModalDelete extends ModalWindow
{

    modalResponseData: ModalDeleteResponse = new ModalDeleteResponse();

    constructor()
    {
        super();
    }

    ngOnInit()
    {
        this.modalResponseData.modalType = ModalType.delete;
        this.modalResponseData.employeeId = this.employeeId;
    }

    public confirm()
    {
        this.modalResponseData.modalResult = ModalResult.confirm;
        this.modalResponse.emit(this.modalResponseData);
        
    }

    public close()
    {
        this.modalResponseData.modalResult = ModalResult.close;
        this.modalResponse.emit(this.modalResponseData);
    }
}