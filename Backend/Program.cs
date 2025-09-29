using Backend.Endpoints;
using Backend.Models;
using Backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<TaskDatabaseSettings>(
    builder.Configuration.GetSection("TaskDatabaseSettings"));
builder.Services.AddSingleton<TaskServices>();

var corsOriginPolicy = "_originPolicy";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: corsOriginPolicy,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000", "http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(corsOriginPolicy);

app.RegisterTaskEndpoints();

app.Run();
