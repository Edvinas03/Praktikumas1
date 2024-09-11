using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Praktikumas1.Server.Data;
using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Controllers;

    [ApiController]
[Route(template:"api/[controller]")]


    public class StudentsController(AppDbContext context) : ControllerBase
    {
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var students = await context.Students.ToListAsync();
        List<StudentDto> results = [];

        foreach (var student in students) {
            results.Add(new StudentDto(student.Id, FullName:$"{student.FirstName} {student.LastName}", student.Email));
    }
        return Ok(results);
    }
}
