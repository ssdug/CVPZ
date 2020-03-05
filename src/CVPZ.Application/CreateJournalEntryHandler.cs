using CVPZ.Core.Model;
using CVPZ.Core.Repositories;
using MediatR;
using Serilog;
using System.Threading;
using System.Threading.Tasks;

namespace CVPZ.Application
{
    public class CreateJournalEntryHandler : IRequestHandler<CreateJournalEntry, JournalEntry>
    {
        private readonly IJournalEntryRepository _journalEntryRepository;

        public CreateJournalEntryHandler(IJournalEntryRepository journalEntryRepository)
        {
            _journalEntryRepository = journalEntryRepository;
        }

        public async Task<JournalEntry> Handle(CreateJournalEntry request, CancellationToken cancellationToken)
        {
            Log.Information("Handling Create Journal Entry Request", request);

            var journalEntry = new JournalEntry
            {
                Description = request.Description
            };

            await _journalEntryRepository.Save(journalEntry);

            return journalEntry;
        }
    }
}
