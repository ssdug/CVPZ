using MediatR;
using Serilog;
using System.Threading;
using System.Threading.Tasks;

namespace CVPZ.Application
{
    public class CreateJournalEntryHandler : IRequestHandler<CreateJournalEntry, string>
    {
        public async Task<string> Handle(CreateJournalEntry request, CancellationToken cancellationToken)
        {
            Log.Information("Handling Create Journal Entry Request", request);
            return await Task.Run(() =>  "Good for you!");
        }
    }
}
