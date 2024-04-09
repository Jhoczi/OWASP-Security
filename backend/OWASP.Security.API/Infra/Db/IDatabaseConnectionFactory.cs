using System.Data;

namespace OWASP.Security.API.Infra.Db;

public interface IDatabaseConnectionFactory
{
    IDbConnection CreateConnection();
}