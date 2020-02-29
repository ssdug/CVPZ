using CVPZ.Core.Model;
using MediatR;
using Serilog;
using System.Threading;
using System.Threading.Tasks;

namespace CVPZ.Application
{
    public class CreateJournalEntryHandler : IRequestHandler<CreateJournalEntry, JournalEntry>
    {
        public async Task<JournalEntry> Handle(CreateJournalEntry request, CancellationToken cancellationToken)
        {
            Log.Information("Handling Create Journal Entry Request", request);

            var journalEntry = new JournalEntry { Id = 123, Description = request.Description };

            return await Task.Run(() => journalEntry);
        }
    }
}
