using Microsoft.EntityFrameworkCore;

namespace CVPZ.Infrastructure.Entities
{
    public class CVPZContext : DbContext
    {

        public CVPZContext(DbContextOptions<CVPZContext> options)
            : base(options)
        { }

        public DbSet<JournalEntry> JournalEntries { get; set; }
    }
}