using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

using Microsoft.Extensions.Options;
using MytrexTask.Schemas;
using System.Threading.Tasks;
using System.Collections.Generic;
using MytrexTask.Models;
using System;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;

namespace MytrexTask.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeService _service;
        private readonly ILogger<EmployeesController> _logger;
        public EmployeesController(EmployeeService service, ILogger<EmployeesController> logger)
        {
            _service = service;
            _logger = logger;
        }

        [HttpGet("get")]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            return await _service.GetEmployeesAsync();
        }

        [HttpPost("add")]
        public async Task<IActionResult> PostEmployee(CreateEmployeeCommand input)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var id = await _service.CreateEmployeeAsync(input);

            return CreatedAtAction(nameof(GetEmployees), new { id = id }, input);

        }

        [HttpDelete("delete/{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            Console.WriteLine("Delete reached");
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var employee = await _service.DeleteEmployeeAsync(id);

            if (employee is null)
            {
                return NotFound();
            }

            return employee;
        }

        [HttpPatch("update")]
        public async Task<ActionResult<Employee>> PatchEmployee(UpdateEmployeeCommand input)
        {
            var employee = await _service.UpdateEmployeeAsync(input);

            if (employee is null)
            {
                return NotFound();
            }

            return employee;
        }
    }
}
