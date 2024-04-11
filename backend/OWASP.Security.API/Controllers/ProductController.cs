using OWASP.Security.API.Infra.Db;

namespace OWASP.Security.API.Controllers;

using Microsoft.AspNetCore.Mvc;
using Dapper;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IDatabaseConnectionFactory _connectionFactory;

    public ProductsController(IDatabaseConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        using var db = _connectionFactory.CreateConnection();
        var products = await db.QueryAsync<dynamic>("SELECT * FROM Products");
        return new JsonResult(products);
    }
    
    [HttpGet("{productId}")]
    public async Task<IActionResult> GetProduct(string productId)
    {
        using var db = _connectionFactory.CreateConnection();
        var products = await db.QueryFirstOrDefaultAsync($"SELECT * FROM Products WHERE ProductID = {productId}");
        return new JsonResult(products);
    }
}
