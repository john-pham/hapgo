
using System.ComponentModel.DataAnnotations.Schema;

namespace Hapgo.Domain
{
    public interface IObjectState
    {
        [NotMapped]
        ObjectState ObjectState { get; set; }
    }
}
