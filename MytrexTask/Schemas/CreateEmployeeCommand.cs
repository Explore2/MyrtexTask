using MytrexTask.Models;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MytrexTask.Schemas
{
    public class CreateEmployeeCommand
    {
        [Required]
        [MinLength(1, ErrorMessage = "Minimum length must be equal or greater than {1}")]
        public string Departament { get; set; }

        [Required]
        [MinLength(1, ErrorMessage = "Minimum length must be equal or greater than {1}")]
        public string FirstName { get; set; }

        [Required]
        [MinLength(1, ErrorMessage = "Minimum length must be equal or greater than {1}")]
        public string SecondName { get; set; }

        [Required]
        [MinLength(1, ErrorMessage = "Minimum length must be equal or greater than {1}")]
        public string MiddleName { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOfEmployment { get; set; }

        [Required]
        [Range(0, (double)Decimal.MaxValue, ErrorMessage = "The field {0} must be equal or greater than {1}")]
        [Column(TypeName = "money")]
        public decimal Salary { get; set; }

        public Employee ToEmployee()
        {
            return new Employee
            {
                FirstName = FirstName,
                SecondName = SecondName,
                MiddleName = MiddleName,
                DateOfBirth = DateOfBirth,
                DateOfEmployment = DateOfEmployment,
                Departament = Departament,
                Salary = Salary
            };
        }
    }
}
