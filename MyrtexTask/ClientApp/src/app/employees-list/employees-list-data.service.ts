import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable()
export class EmployeesListDataService
{

    private url = "/employees";

    constructor(private http: HttpClient)
    {
    }

    getEmployees()
    {
        return this.http.get(this.url+"/get");
    }

    patchEmployee(employee: Employee)
    {
        return this.http.patch(this.url + "/update", employee);
    }

    deleteEmployee(employeeId: number)
    {
        return this.http.delete(this.url + "/delete/" + employeeId);
    }

    addEmployee(employee: Employee)
    {
        return this.http.post(this.url + "/add", employee);
    }
}