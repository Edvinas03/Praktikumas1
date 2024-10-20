using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface IGetLecturerService
    {
        Task<List<LecturerDto>> GetAll();
        Task<LecturerDto> Get(int id);
    }
}
