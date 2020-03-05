using CVPZ.Core.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CVPZ.Core.Repositories
{
    public interface IJournalEntryRepository
    {
        Task<IEnumerable<JournalEntry>> GetAll();
        Task Save(JournalEntry journalEntry);
    }
}
