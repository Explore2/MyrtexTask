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
export class EmployeesListComponent implements OnInit {
    employees: Employee[];
    modalEmployee: Employee;
    modalType: ModalType;
    orderKey: string = "Id";
    filterEmployee: Employee = new Employee();
    constructor(private dataService: EmployeesListDataService) {
    }

    ngOnInit() {
        this.dataService.getEmployees().subscribe((data: Employee[]) => this.employees = data)
    }

    public filterChange(key: string, value: any) {
        if (value == "" || value == null || value == undefined) {
            
        }
    }

    public changeOrder(key: string) {
        if (key == this.orderKey) {
            if (key.startsWith('-')) {
                this.orderKey = key.substr(1, key.length);
            }
            else {
                this.orderKey = "-" + this.orderKey;
            }
        }
        else {
            this.orderKey = key;
        }     
    }

    public openModal(id: number, modalTypeInput: ModalType) {
        console.log(this.filterEmployee);
        this.modalEmployee = this.employees.find(x => x.id == id);
        this.modalType = modalTypeInput;
    }


    public closeModal(modalResponse: ModalResponse) {
        var errors: boolean
        console.log(modalResponse);
        if (modalResponse.modalResult == ModalResult.confirm) {
            if (modalResponse.modalType == ModalType.edit) {
                let conf = modalResponse as ModalEditResponse;
                this.dataService.patchEmployee(conf.employee)
                    .subscribe(
                        (data: Employee) => this.employees[this.employees.findIndex(x => x.id == data.id)] = data,
                    error => {
                        errors = true;
                        console.error(error);
                    });
            }
            else if (modalResponse.modalType == ModalType.delete) {
                let conf = modalResponse as ModalDeleteResponse;  
                console.log("TODO: TEST");
                this.dataService.deleteEmployee(conf.employeeId)
                    .subscribe(
                        (data: Employee) => this.employees.splice(this.employees.findIndex(x => x.id == data.id), 1),
                        error => {
                            errors = true;
                            console.error(error);
                        });
            }
            else if (modalResponse.modalType == ModalType.add) {
                let conf = modalResponse as EmployeeFormResponse;
                console.log(conf);
                this.dataService.addEmployee(conf.employee)
                    .subscribe(
                        (data: Employee) => this.employees.push(data),
                        error => {
                             errors = true;
                             console.error(error);
                        });
            }

        }
        if (!errors) {
            this.modalEmployee = new Employee();
            this.modalType = ModalType.close;
        }

    }
}