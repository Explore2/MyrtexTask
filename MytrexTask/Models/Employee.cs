using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MytrexTask.Models
{
    public class Employee
    {
        public int Id { get; set; }
        [Required]
        public string Departament { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string SecondName { get; set; }
        [Required]
        public string MiddleName { get; set; }
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }
        [DataType(DataType.Date)]
        public DateTime DateOfEmployment { get; set; }
        [Column(TypeName = "money")]
        public decimal Salary { get; set; }

    }
}
