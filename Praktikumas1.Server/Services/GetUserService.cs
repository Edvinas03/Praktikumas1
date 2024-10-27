using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Praktikumas1.Server.Data;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Models.Entities;

namespace Praktikumas1.Server.Services
{

    public class GetUserService(AppDbContext context) : IGetUserService
    {
        public async Task<List<UserDto>> GetAll()
        {
            var users = await context.Users.ToListAsync();
            List<UserDto> results = [];

            foreach (var user in users)
            {
                results.Add(MapDto(user));
            }
            return results;
        }
        public async Task<UserDto> Get(int id)
        {
            var user = await context.Users.FirstOrDefaultAsync(i => i.Id == id.ToString());
            return MapDto(user);
        }
        private UserDto MapDto(IdentityUser user)
            => new UserDto(user.Id, user.UserName, user.Email);
    }
}
