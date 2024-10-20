using Praktikumas1.Server.Models.DTOs;

namespace Praktikumas1.Server.Services
{
    public interface IAuthService
    {
        Task<(int, string)> Registration(RegistrationDto model);
        Task<(int, AuthDto)> Login(LoginDto model, HttpContext httpContext);
        AuthDto CheckSession(HttpContext httpContext);
        Task Logout(HttpContext httpContext);
    }
}
