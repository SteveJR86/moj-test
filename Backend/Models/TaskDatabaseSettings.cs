namespace Backend.Models
{
    public class TaskDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string TestCollectionName { get; set; } = null!;
    }
}
