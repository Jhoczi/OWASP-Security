using Dapper;
using Microsoft.AspNetCore.Mvc;
using OWASP.Security.API.Infra.Db;

namespace OWASP.Security.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ServiceRequestsController : ControllerBase
{
    private readonly IDatabaseConnectionFactory _connectionFactory;
    
    public ServiceRequestsController(IDatabaseConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }
    
    [HttpPost("{productId}")]
    public async Task<IActionResult> CreateServiceRequest(int productId, [FromBody] string issueDescription)
    {
        using var db = _connectionFactory.CreateConnection();
        var date = DateTime.UtcNow;
        var createServiceRequest = await db.ExecuteAsync($"INSERT INTO ServiceRequests (ProductId,IssueDescription,RequestDate,Status) VALUES ({productId},'{issueDescription}','{date}','NEW')");
        
        return NoContent();
    }
}
