namespace EmployeeManagementAPI.Middleware
{
    public class SimpleAuthMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IConfiguration _configuration;
        private const string AuthHeaderName = "Authorization";

        public SimpleAuthMiddleware(RequestDelegate next, IConfiguration configuration)
        {
            _next = next;
            _configuration = configuration;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var path = context.Request.Path.Value?.ToLower();

            if (path != null && (path.Contains("/swagger") || path.Contains("/openapi")))
            {
                await _next(context);
                return;
            }

            if (!context.Request.Headers.TryGetValue(AuthHeaderName, out var authHeader))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsJsonAsync(new { error = "Authorization header is missing" });
                return;
            }

            var token = authHeader.ToString().Replace("Bearer ", "");
            var expectedToken = _configuration["AuthToken"] ?? "miguels-demo-token";

            if (token != expectedToken)
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsJsonAsync(new { error = "Invalid authentication token" });
                return;
            }

            await _next(context);
        }
    }
}
