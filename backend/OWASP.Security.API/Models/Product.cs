namespace OWASP.Security.API.Models;

public class Product
{
    public int ProductId { get; set; }
    public string Name { get; set; }
    public string Model { get; set; }
    public string SerialNumber { get; set; }
    public DateTime ManufactureDate { get; set; }
    public decimal Price { get; set; }
}
