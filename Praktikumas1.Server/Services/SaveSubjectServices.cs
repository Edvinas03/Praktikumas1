using Microsoft.EntityFrameworkCore;
using Praktikumas1.Server.Data;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Models.Entities;

namespace Praktikumas1.Server.Services
{
    public class SaveSubjectService(AppDbContext context) : ISaveSubjectService
    {
        public async Task Store(SubjectDto dto)
        {
            var subject = new Subject(dto.Title);
            context.Subjects.Add(subject);
            await context.SaveChangesAsync();
        }
        public async Task Update(int id, SubjectDto dto)
        {
            var subject = await context.Subjects.FirstOrDefaultAsync(i => i.Id == id);
            if (subject != null)
            {
                subject.SetValues(dto.Title);
                context.Subjects.Update(subject);
                await context.SaveChangesAsync();
            }
        }
        public async Task Delete(int id)
        {
            var subject = await context.Subjects.FirstOrDefaultAsync(i => i.Id == id);
            if (subject != null)
            {
                context.Subjects.Remove(subject);
                await context.SaveChangesAsync();
            }
        }
    }
}