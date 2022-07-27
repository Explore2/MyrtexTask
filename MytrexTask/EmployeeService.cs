using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MytrexTask.Models;
using MytrexTask.Schemas;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MytrexTask
{
    public class EmployeeService
    {
        private readonly EmployeeDbContext _context;
        private readonly ILogger<EmployeeService> _logger;

        public EmployeeService(EmployeeDbContext context, ILogger<EmployeeService> logger)
        {
            _context = context;
            _logger = logger;
        }

        /// <summary>
        /// Create a new employee
        /// </summary>
        /// <param name="input">Data provided in request</param>
        /// <returns>id of the new employee</returns>
        public async Task<Employee> CreateEmployeeAsync(CreateEmployeeCommand input)
        {
            var employee = input.ToEmployee();
            _context.Add(employee);

            await _context.SaveChangesAsync();

            return employee;
        }

        /// <summary>
        /// </summary>
        /// <returns>list of employees</returns>
        public async Task<List<Employee>> GetEmployeesAsync()
        {
            List<Employee> employees = await _context.Employees.ToListAsync();

            return employees;
        }

        /// <summary>
        /// Updates employee
        /// </summary>
        /// <param name="input">Data provided in request</param>
        /// <returns>Updated employee</returns>
        public async Task<Employee> UpdateEmployeeAsync(UpdateEmployeeCommand input)
        {

            var employee = await _context.Employees.FirstOrDefaultAsync(x => x.Id == input.Id);

            if (employee is null)
            {
                return null;
            }

            input.UpdateEmployee(employee);

            await _context.SaveChangesAsync();

            return employee;
        }

        /// <summary>
        /// Deletes an employee
        /// </summary>
        /// <param name="id">Id of employee that needs to be deleted</param>
        /// <returns>Deleted employee</returns>
        public async Task<Employee> DeleteEmployeeAsync(int id)
        {
            var employee = await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if (employee is null)
            {
                return null;
            }
            _context.Remove(employee);

            await _context.SaveChangesAsync();

            return employee;
        }

    }
}
