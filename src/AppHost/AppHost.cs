using Aspire.Hosting;

var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Api>("Api");

builder.AddViteApp("Frontend", "../Frontend").WithPnpm();

var app = builder.Build();

app.Run();
