using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Praktikumas1.Server.Data.Consts;

namespace Praktikumas1.Server.Controllers.Admin
{
    [ApiController]
    [Route("api/admin/[controller]")]
    [Authorize(Roles = UserRoles.Admin)]
    public class DashboardController: ControllerBase
    {
        public IActionResult Show()
            => Ok(new { text = "You logged to dashboard!" });
    }
}
