using Microsoft.Extensions.Options;
using MongoDB.Driver;
using Backend.Models;

namespace Backend.Services
{
    public class TaskServices
    {
        private readonly IMongoCollection<TaskItem> _tasksCollection;

        public TaskServices(
            IOptions<TaskDatabaseSettings> taskDatabaseSettings)
        {
            var mongoClient = new MongoClient(taskDatabaseSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(taskDatabaseSettings.Value.DatabaseName);
            _tasksCollection = mongoDatabase.GetCollection<TaskItem>(taskDatabaseSettings.Value.TestCollectionName);
        }

        public async Task<List<TaskItem>> GetAsync() => await _tasksCollection.Find(_ =>  true).ToListAsync();
        public async Task<TaskItem?> GetAsync(string id) => await _tasksCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task CreateAsync(TaskItem newTask) => await _tasksCollection.InsertOneAsync(newTask);
        public async Task UpdateAsync(string id, TaskItem updatedTask) => await _tasksCollection.ReplaceOneAsync(x => x.Id == id, updatedTask);
        public async Task RemoveAsync(string id) => await _tasksCollection.DeleteOneAsync(x => x.Id == id);
    }
}
