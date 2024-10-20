using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface IGetGroupService
    {
        Task<List<GroupDto>> GetAll();
        Task<GroupDto> Get(int id);
    }
}