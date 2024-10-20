using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Services;

namespace Praktikumas1.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]

public class GroupsController(IGetGroupService getGroupService, ISaveGroupService saveGroupService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var results = await getGroupService.GetAll();
        return Ok(results);
    }

    [HttpPut(template: "{id:int}")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Put(int id, GroupDto dto)
    {
        await saveGroupService.Update(id, dto);
        return Ok();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Post(GroupDto dto)
    {
        await saveGroupService.Store(dto);
        return Ok();
    }

    [HttpDelete("{id}")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Delete(int id)
    {
        await saveGroupService.Delete(id);
        return Ok();
    }
}