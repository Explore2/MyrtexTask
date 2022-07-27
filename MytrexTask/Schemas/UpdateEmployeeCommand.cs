using MytrexTask.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MytrexTask.Schemas
{
    public class UpdateEmployeeCommand
    {
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "The field {0} must be equal or greater than {1}")]
        public int Id { get; set; }

        [MinLength(1, ErrorMessage = "Minimum length of field {0} must be equal orgreater than {1}")]
        public string Departament { get; set; }

        [MinLength(1, ErrorMessage = "Minimum length of field {0} must be equal or greater than {1}")]
        public string FirstName { get; set; }

        [MinLength(1, ErrorMessage = "Minimum length of field {0} must be equal or greater than {1}")]
        public string SecondName { get; set; }

        [MinLength(1, ErrorMessage = "Minimum length of field {0} must be equal or greater than {1}")]
        public string MiddleName { get; set; }

        [DataType(DataType.Date)]
        public DateTime? DateOfBirth { get; set; }

        [DataType(DataType.Date)]
        public DateTime? DateOfEmployment { get; set; }

        [Column(TypeName = "money")]
        [Range(0, (double)Decimal.MaxValue, ErrorMessage = "The field {0} must be equal or greater than {1}")]
        public decimal? Salary { get; set; }

        public void UpdateEmployee(Employee employee)
        {
            employee.Departament = !(Departament is null) ? Departament : employee.Departament;
            employee.FirstName = !(FirstName is null) ? FirstName : employee.FirstName;
            employee.SecondName = !(SecondName is null) ? SecondName : employee.SecondName;
            employee.MiddleName = !(MiddleName is null) ? MiddleName : employee.MiddleName;
            employee.DateOfBirth = (DateTime)(!(DateOfBirth is null) ? DateOfBirth : employee.DateOfBirth);
            employee.DateOfEmployment = (DateTime)(!(DateOfEmployment is null) ? DateOfEmployment : employee.DateOfEmployment);
            employee.Salary = ((decimal)(!(Salary is null) ? Salary : employee.Salary));
        }
    }
}
