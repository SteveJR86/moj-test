using Backend.Models;

using Microsoft.AspNetCore.Http.HttpResults;

namespace Backend.Endpoints
{
    public static class Tasks
    {
        public static void RegisterTaskEndpoints(this WebApplication app)
        {
            app.MapGet("/tasks", () => "Another endpoint");
            app.MapPost("/tasks", (TaskItem item) =>
            {
            // TODO: add code in to save item to database here
                return item;
            });
        }
    }
}
