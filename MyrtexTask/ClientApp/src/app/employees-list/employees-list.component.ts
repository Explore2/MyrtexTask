import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { EmployeesListDataService } from './employees-list-data.service';
import { ModalResponse, ModalResult, ModalType } from '../modal-window/modal-response';
import { ModalEditResponse } from '../modal-edit/modal-edit-response';
import { ModalDeleteResponse} from '../modal-delete/modal-delete-response';
import { EmployeeFormResponse } from '../employee-form/employee-form-response';


@Component({
    selector: 'app-employee',
    templateUrl: './employees-list.component.html',
    providers: [EmployeesListDataService]
})
export class EmployeesListComponent implements OnInit
{

    employees: Employee[];
    modalEmployee: Employee;
    modalType: ModalType;
    orderKey: string = "Id";
    filterEmployee: Employee = new Employee();

    constructor(private dataService: EmployeesListDataService)
    {
    }

    ngOnInit()
    {
        this.dataService.getEmployees().subscribe((data: Employee[]) => this.employees = data)
    }

    public changeOrder(key: string)
    {

        if (key == this.orderKey)
        {
            if (key.startsWith('-'))
            {
                this.orderKey = key.substr(1, key.length);
            }
            else
            {
                this.orderKey = '-' + this.orderKey;
            }
        }
        else
        {
            this.orderKey = key;
        }
    }

    public openModal(id: number, modalTypeInput: ModalType)
    {
        this.modalEmployee = this.employees.find(x => x.id == id);

        this.modalType = modalTypeInput;
    }

    private dealWithEdit(modalResponse: ModalResponse): boolean
    {

        let hasErrors: boolean = false;

        let convertedResponse = modalResponse as ModalEditResponse;

        this.dataService.patchEmployee(convertedResponse.employee)
            .subscribe(
                (data: Employee) =>
                    this.employees[this.employees.findIndex(x => x.id == data.id)] = data,

                error =>
                {
                    hasErrors = true;
                    console.error(error);
                });

        return hasErrors;
    }

    private dealWithDelete(modalResponse: ModalResponse): boolean
    {

        let hasErrors: boolean = false;

        let convertedResponse = modalResponse as ModalDeleteResponse;

        console.log(convertedResponse.employeeId);

        this.dataService.deleteEmployee(convertedResponse.employeeId)
            .subscribe(
                (data: Employee) =>
                    this.employees.splice(this.employees.findIndex(x => x.id == data.id), 1),

                error =>
                {
                    hasErrors = true;
                    console.error(error);
                });

        return hasErrors;
    }

    private dealWithAdd(modalResponse: ModalResponse): boolean
    {

        let hasErrors: boolean = false;

        let convertedResponse = modalResponse as EmployeeFormResponse;

        this.dataService.addEmployee(convertedResponse.employee)
            .subscribe(

                (data: Employee) =>
                {
                    this.employees.push(data);
                },
                    
                error =>
                {
                    hasErrors = true;
                    console.error(error);
                });


        return hasErrors;
    }

    public closeModal(modalResponse: ModalResponse)
    {

        var hasErrors: boolean = false;

        if (modalResponse.modalResult == ModalResult.confirm) {

            switch (modalResponse.modalType) {

                case ModalType.edit:
                    hasErrors = this.dealWithEdit(modalResponse);
                    break;

                case ModalType.add:
                    hasErrors = this.dealWithAdd(modalResponse);
                    break;

                case ModalType.delete:
                    hasErrors = this.dealWithDelete(modalResponse);
                    break;

                default:
                    console.error("Unexpected modal response");
                    hasErrors = true;
                    break;
            }
            if (!hasErrors) {

                this.modalEmployee = new Employee();

                this.modalType = ModalType.close;
            }
        }

        else if (modalResponse.modalResult == ModalResult.close) {

            this.modalEmployee = new Employee();

            this.modalType = ModalType.close;
        }
    }
}