using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Praktikumas1.Server.Data.Consts;
using Praktikumas1.Server.Services;

namespace Praktikumas1.Server.Controllers.Admin
{
    [ApiController]
    [Route("api/admin/[controller]")]
    [Authorize(Roles = UserRoles.Admin)]
    public class DashboardController(IGetUserService GetUserService) : Controller
    {
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var results = await GetUserService.GetAll();
            return Ok(results);
        }
    }
}
