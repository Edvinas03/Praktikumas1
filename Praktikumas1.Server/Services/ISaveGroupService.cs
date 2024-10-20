using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface ISaveGroupService
    {
        Task Store(GroupDto dto);
        Task Update(int id, GroupDto dto);
        Task Delete(int id);
    }
}