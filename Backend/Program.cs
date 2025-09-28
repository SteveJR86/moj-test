using Backend.Endpoints;
using Backend.Models;
using Backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<TaskDatabaseSettings>(
    builder.Configuration.GetSection("TaskDatabaseSettings"));
builder.Services.AddSingleton<TaskServices>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapGet("/", () => "Hello Bob!");

app.RegisterTaskEndpoints();

app.Run();
