namespace Praktikumas1.Server.Models.DTOs
{
    public record AuthDto(bool IsAuthenticated, string? Message, string? UserName = "", string? Email = "", string? Role = "");
}