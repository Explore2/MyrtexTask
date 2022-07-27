import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../employees-list/employee";

@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {

    transform(items: Array<Employee>, key: string): Array<Employee> {

        if (items != undefined) {

            if (key.startsWith("-")) {
                key = key.substr(1, key.length - 1)
                items.sort((a: any, b: any) =>
                {
                    if (b[key] < a[key])
                    {
                        return -1;
                    } else if (b[key] > a[key])
                    {
                        return 1;
                    } else
                    {
                        return 0;
                    }
                });
            }

            else
            {
                items.sort((a: any, b: any) =>
                {
                    if (a[key] < b[key])
                    {
                        return -1;
                    } else if (a[key] > b[key])
                    {
                        return 1;
                    } else
                    {
                        return 0;
                    }
                });
            }
        }

        return items;
  }
}