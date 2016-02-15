using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

using System.Text;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public enum MaintenanceMode : byte
    {
        Emergency = 1,
        Daily = 2,
        Problem = 3
    }

    public class Maintenance
    {
        public Guid ID
        {
            get;
            set;
        }

        public DateTime? Start
        {
            get;
            set;
        }

        public DateTime? End
        {
            get;
            set;
        }

        public string Message
        {
            get;
            set;
        }
    }
}
