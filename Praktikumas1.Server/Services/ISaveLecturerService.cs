using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface ISaveLecturerService
    {
        Task Store(LecturerDto dto);
        Task Update(int id, LecturerDto dto);
        Task Delete(int id);
    }
}