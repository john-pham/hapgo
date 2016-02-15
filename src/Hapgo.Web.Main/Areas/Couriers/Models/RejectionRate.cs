using System;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public class RejectionRate
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public long RejectedByServer
        {
            get;
            set;
        }

        public long RejectedByBookmaker
        {
            get;
            set;
        }

        public long Total
        {
            get;
            set;
        }

        public ResponseTime RT
        {
            get;
            set;
        }
    }
}
