using Microsoft.EntityFrameworkCore;
using Praktikumas1.Server.Data;
using Praktikumas1.Server.Models.DTOs;
using Praktikumas1.Server.Models.Entities;

namespace Praktikumas1.Server.Services
{
    public class GetSubjectService(AppDbContext context) : IGetSubjectService
    {
        public async Task<List<SubjectDto>> GetAll()
        {
            var subjects = await context.Subjects.ToListAsync();
            List<SubjectDto> results = [];

            foreach (var subject in subjects)
            {
                results.Add(MapDto(subject));
            }
            return results;
        }
        public async Task<SubjectDto> Get(int id)
        {
            var subject = await context.Subjects.FirstOrDefaultAsync(i => i.Id == id);
            return MapDto(subject);
        }
        private SubjectDto MapDto(Subject subject)
            => new SubjectDto(subject.Id, subject.Title);
    }
}