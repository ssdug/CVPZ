using CVPZ.Core.Repositories;
using System.Linq;
using System.Collections.Generic;
using CVPZ.Core.Model;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CVPZ.Infrastructure.Entities
{
    public class JournalEntryRepository : BaseRepository, IJournalEntryRepository
    {
        public JournalEntryRepository(CVPZContext context) : base(context) { }

        public async Task<IEnumerable<JournalEntry>> GetAll()
        {
            return await _context.JournalEntries.ToListAsync();
        }

        public async Task Save(JournalEntry journalEntry)
        {
            if (journalEntry.Id < 1)
            {
                _context.JournalEntries.Add(journalEntry);
            } else
            {
                _context.JournalEntries.Attach(journalEntry);
            }

            await _context.SaveChangesAsync();
        }
    }
}
