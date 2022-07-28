import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalResult, ModalType, ModalResponse } from './modal-response';


export abstract class ModalWindow implements OnInit
{

    @Input() employeeId: number;
    @Output() modalResponse: EventEmitter<ModalResponse> = new EventEmitter<ModalResponse>();

    constructor()
    {
    }

    ngOnInit()
    {
    }

    public abstract confirm()

    public abstract close()

}