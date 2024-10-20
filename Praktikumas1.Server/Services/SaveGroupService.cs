using Microsoft.EntityFrameworkCore;
using Praktikumas1.Server.Data;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Models.Entities;

namespace Praktikumas1.Server.Services
{
    public class SaveGroupService(AppDbContext context) : ISaveGroupService
    {
        public async Task Store(GroupDto dto)
        {
            var group = new Group(dto.Title);
            context.Groups.Add(group);
            await context.SaveChangesAsync();
        }
        public async Task Update(int id, GroupDto dto)
        {
            var group = await context.Groups.FirstOrDefaultAsync(i => i.Id == id);
            if (group != null)
            {
                group.SetValues(dto.Title);
                context.Groups.Update(group);
                await context.SaveChangesAsync();
            }
        }
        public async Task Delete(int id)
        {
            var group = await context.Groups.FirstOrDefaultAsync(i => i.Id == id);
            if (group != null)
            {
                context.Groups.Remove(group);
                await context.SaveChangesAsync();
            }
        }
    }
}
