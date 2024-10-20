using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Services;

namespace Praktikumas1.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]

public class SubjectsController(IGetSubjectService getSubjectService, ISaveSubjectService saveSubjectService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var results = await getSubjectService.GetAll();
        return Ok(results);
    }

    [HttpPut(template: "{id:int}")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Put(int id, SubjectDto dto)
    {
        await saveSubjectService.Update(id, dto);
        return Ok();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Post(SubjectDto dto)
    {
        await saveSubjectService.Store(dto);
        return Ok();
    }
    [HttpDelete("{id}")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await saveSubjectService.Delete(id);
        return Ok();
    }
}