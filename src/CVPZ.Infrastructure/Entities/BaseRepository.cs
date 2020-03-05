namespace CVPZ.Infrastructure.Entities
{
    public abstract class BaseRepository
    {
        protected readonly CVPZContext _context;

        public BaseRepository(CVPZContext context)
        {
            _context = context;
        }
    }
}
