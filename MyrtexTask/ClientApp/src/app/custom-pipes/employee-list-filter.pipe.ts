import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../employees-list/employee";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform
{
    transform(items: Array<any>, filter: Employee): Array<Employee>
    {
        if (items != undefined && filter != undefined)
        {
            return items.filter(item =>
            {
                let notMatchingField = Object.keys(filter)
                    .find(key =>
                    {
                        if (key != "id" && filter[key] != null) 
                        {
                            return !(item[key].toString().includes(filter[key].toString()));
                        }
                    });
                return !notMatchingField;
            });
        }
        
    }
}