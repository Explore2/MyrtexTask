import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalWindow } from '../modal-window/modal-window';
import { ModalResult, ModalType, ModalResponse } from '../modal-window/modal-response';
import { ModalDeleteResponse } from './modal-delete-response';

@Component({
    selector: 'modal-delete',
    templateUrl: './modal-delete.html',
})
export class ModalDelete extends ModalWindow{

    

    constructor() {
        super();
    }

    ngOnInit() {
        
    }

    public confirm() {
        console.log(this.employeeId)
        var m = new ModalDeleteResponse();
        m.modalResult = ModalResult.confirm;
        m.modalType = ModalType.delete;
        m.employeeId = this.employeeId;
        this.modalResponse.emit(m);
        
    }
    public close() {
        var m = new ModalDeleteResponse();
        m.modalResult = ModalResult.close;
        m.modalType = ModalType.delete;
        m.employeeId = this.employeeId;
        this.modalResponse.emit(m);
    }
}