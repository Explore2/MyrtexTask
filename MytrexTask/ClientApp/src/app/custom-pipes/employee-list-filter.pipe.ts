import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../employees-list/employee";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, employee: Employee, strict : boolean) {
        var filter = Object.entries(employee);
        if (items != undefined && filter != undefined) {
            return items.filter(item => {
                let notMatchingField = Object.keys(employee)
                    .find(key => {
                        if (key != "id" && employee[key] != null) {
                            return !(item[key].toString().includes(employee[key].toString()));
                        }
                    });
                return !notMatchingField;
            });
        }
        
    }
}