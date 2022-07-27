import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../employees-list/employee";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
    transform(array: Array<Employee>, key: string): Array<Employee> {
        if (array != undefined) {
            if (key.startsWith("-")) {
                key = key.substr(1, key.length - 1)
                array.sort((a: any, b: any) => {
                    if (b[key] < a[key]) {
                        return -1;
                    } else if (b[key] > a[key]) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
            else {
                array.sort((a: any, b: any) => {
                    if (a[key] < b[key]) {
                        return -1;
                    } else if (a[key] > b[key]) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }
        }
        return array;
  }
}