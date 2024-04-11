using Microsoft.AspNetCore.Mvc;
using Dapper;
using OWASP.Security.API.Infra.Db;

namespace OWASP.Security.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class OrdersController : ControllerBase
{
    private readonly IDatabaseConnectionFactory _connectionFactory;

    public OrdersController(IDatabaseConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }
    
    // Pobierz wszystkie zamówienia
    [HttpGet]
    public async Task<IActionResult> GetOrders()
    {
        using var db = _connectionFactory.CreateConnection();
        var orders = await db.QueryAsync<dynamic>("SELECT * FROM Orders");
        return new JsonResult(orders);
    }
    
    // Pobierz pojedyncze zamówienie po OrderID
    [HttpGet("{orderId}")]
    public async Task<IActionResult> GetOrder(string orderId)
    {
        using var db = _connectionFactory.CreateConnection();
        // Zła praktyka - bezpośrednie wstawienie orderId do zapytania
        var order = await db.QueryAsync<dynamic>($"SELECT * FROM Orders WHERE OrderID = {orderId}");
        return new JsonResult(order);
    }

    // Dodaj nowe zamówienie
    [HttpPost]
    public async Task<IActionResult> CreateOrder([FromBody] OrderRequest orderRequest)
    {
        using var db = _connectionFactory.CreateConnection();
        // Zła praktyka - bezpośrednie wstawienie danych do zapytania
        var id = await db.QueryFirstOrDefaultAsync<int>($"SELECT CustomerID FROM Customers WHERE Email = '{orderRequest.CustomerEmail}'");
        
        var query = $"INSERT INTO Orders (CustomerID, ProductID, OrderDate, TotalPrice) VALUES ({id}, {orderRequest.ProductID}, '{orderRequest.OrderDate:yyyy-MM-dd}', {orderRequest.TotalPrice})";
        await db.ExecuteAsync(query);
        return Ok();
    }

    // Model danych przychodzących w żądaniu
    public class OrderRequest
    {
        public string CustomerEmail { get; set; }
        public int ProductID { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;
        public decimal TotalPrice { get; set; }
    }
}