using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface IGetUserService
    {
        Task<List<UserDto>> GetAll();
        Task<UserDto> Get(int id);
    }
}
