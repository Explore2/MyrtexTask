export class ModalResponse {

    modalType: ModalType;
    modalResult: ModalResult;

    constructor() { };

}

export enum ModalType {

    delete,
    edit,
    add,
    close

}

export enum ModalResult {

    confirm,
    close

}