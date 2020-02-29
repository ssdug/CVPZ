using CVPZ.Core.Model;
using MediatR;

namespace CVPZ.Application
{
    public class CreateJournalEntry : IRequest<JournalEntry>
    {
        public string Description { get; set; }
    }
}
