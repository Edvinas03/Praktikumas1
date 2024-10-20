using Microsoft.EntityFrameworkCore;
using Praktikumas1.Server.Data;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Models.Entities;

namespace Praktikumas1.Server.Services
{
    public class SaveProgrammeService(AppDbContext context) : ISaveProgrammeService
    {
        public async Task Store(ProgrammeDto dto)
        {
            var programme = new Programme(dto.Title);
            context.Programmes.Add(programme);
            await context.SaveChangesAsync();
        }
        public async Task Update(int id, ProgrammeDto dto)
        {
            var programme = await context.Programmes.FirstOrDefaultAsync(i => i.Id == id);
            if (programme != null)
            {
                programme.SetValues(dto.Title);
                context.Programmes.Update(programme);
                await context.SaveChangesAsync();
            }
        }
        public async Task Delete(int id)
        {
            var programme = await context.Programmes.FirstOrDefaultAsync(i => i.Id == id);
            if (programme != null)
            {
                context.Programmes.Remove(programme);
                await context.SaveChangesAsync();
            }
        }
    }
}
