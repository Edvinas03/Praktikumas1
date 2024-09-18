using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Praktikumas1.Server.Data;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Services;

namespace Praktikumas1.Server.Controllers;

    [ApiController]
[Route("api/[controller]")]


    public class StudentsController(IGetStudentService getStudentService, ISaveStudentService saveStudentService) : ControllerBase
    {
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var results = await getStudentService.GetAll();
        return Ok(results);
    }
    
    [HttpPut(template:"{id:int}")]

    public async Task<IActionResult> Put(int id, StudentDto dto)
    {
        await saveStudentService.Update(id, dto);
        return Ok();
    }

    [HttpPost]
    public async Task<IActionResult> Post(StudentDto dto)
    {
        await saveStudentService.Store(dto);
        return Ok();
    }
}




