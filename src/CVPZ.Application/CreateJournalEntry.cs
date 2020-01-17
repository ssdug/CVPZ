using MediatR;

namespace CVPZ.Application
{
    public class CreateJournalEntry : IRequest<string>
    {
        public string Description { get; set; }
    }
}
