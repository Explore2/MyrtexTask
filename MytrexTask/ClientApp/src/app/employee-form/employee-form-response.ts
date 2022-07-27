import { Employee } from "../employees-list/employee";
import { ModalResponse } from "../modal-window/modal-response";

export class EmployeeFormResponse extends ModalResponse
{
    employee: Employee;
}