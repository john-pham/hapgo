namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public class RejectionCounter
    {
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
    }
}
