using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using OWASP.Security.API.Infra.Db;
using OWASP.Security.API.Models;

namespace OWASP.Security.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IDatabaseConnectionFactory _connectionFactory;

    public AuthController(IDatabaseConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] UserCredentials userCredentials)
    {
        using var dbConnection = _connectionFactory.CreateConnection();
        var hash = await dbConnection.QuerySingleOrDefaultAsync<string>("SELECT Value FROM AppSettings WHERE Name = 'Hash'");
        var pwdHashed = BCrypt.Net.BCrypt.HashPassword(userCredentials.Password,hash);
        var sqlQuery = $"SELECT * FROM Customers WHERE password = '{pwdHashed}' AND email = '{userCredentials.Username}'";
        var customerData = await dbConnection.QueryFirstOrDefaultAsync<Customer>(sqlQuery);

        if (customerData == null) 
            return Unauthorized();
        
        Claim[] claims;
        claims =
        [
            new Claim(ClaimTypes.Name, userCredentials.Username),
            new Claim(ClaimTypes.Role, customerData.IsAdmin ? "admin" : "user")
        ];
        
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("226  72  33 115 220 146 161  11 200 188 163  58  47  53 181  73 "));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var expiry = DateTime.Now.AddDays(1);

        var token = new JwtSecurityToken(
            claims: claims,
            expires: expiry,
            signingCredentials: creds
        );

        return Ok(new
        {
            token = new JwtSecurityTokenHandler().WriteToken(token)
        });
    }
}
