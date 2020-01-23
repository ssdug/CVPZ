using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace CVPZ.Infrastructure.Entities
{
    public class CVPZContextFactory : IDesignTimeDbContextFactory<CVPZContext>
    {
        public CVPZContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<CVPZContext>()
                .UseSqlite("Data Source=CVPZ.db");

            return new CVPZContext(optionsBuilder.Options);
        }
    }
}