using System.Collections.Generic;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public class Pagination<T>
    {
        public IList<T> Data { get; set; }

        public int TotalItems
        {
            get;
            set;
        }

        public int SelectedPage
        {
            get;
            set;
        }
    }
}
