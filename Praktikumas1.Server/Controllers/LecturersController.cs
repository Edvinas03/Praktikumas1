using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Services;

namespace Praktikumas1.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]

public class LecturersController(IGetLecturerService getLecturerService, ISaveLecturerService saveLecturerService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var results = await getLecturerService.GetAll();
        return Ok(results);
    }

    [HttpPut(template: "{id:int}")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Put(int id, LecturerDto dto)
    {
        await saveLecturerService.Update(id, dto);
        return Ok();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Post(LecturerDto dto)
    {
        await saveLecturerService.Store(dto);
        return Ok();
    }
    [HttpDelete("{id}")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await saveLecturerService.Delete(id);
        return Ok();
    }
}
