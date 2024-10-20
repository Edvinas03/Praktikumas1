using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Services;

namespace Praktikumas1.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]

public class ProgrammesController(IGetProgrammeService getProgrammeService, ISaveProgrammeService saveProgrammeService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var results = await getProgrammeService.GetAll();
        return Ok(results);
    }

    [HttpPut(template: "{id:int}")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Put(int id, ProgrammeDto dto)
    {
        await saveProgrammeService.Update(id, dto);
        return Ok();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Post(ProgrammeDto dto)
    {
        await saveProgrammeService.Store(dto);
        return Ok();
    }
    [HttpDelete("{id}")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await saveProgrammeService.Delete(id);
        return Ok();
    }
}
