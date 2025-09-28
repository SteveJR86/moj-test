using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Http.HttpResults;

namespace Backend.Endpoints
{
    public static class Tasks
    {
        public static void RegisterTaskEndpoints(this WebApplication app)
        {
            app.MapGet("/tasks", async (TaskServices taskServices) =>
            {
                var results = await taskServices.GetAsync();
                return results;
            });
            app.MapGet("/tasks/{id}", async (string id, TaskServices taskServices) =>
            {
                var results = await taskServices.GetAsync(id);
                return results;
            });
            app.MapPost("/tasks", async (TaskItem item, TaskServices taskServices) =>
            {
                await taskServices.CreateAsync(item);
            });
        }
    }
}
