import { EmployeeFormResponse } from "../employee-form/employee-form-response";
import { EmployeeForm } from "../employee-form/employee-form.component";
import { Employee } from "../employees-list/employee";
import { ModalResponse } from "../modal-window/modal-response";

export class ModalEditResponse extends EmployeeFormResponse {
    employeeId: number;
}