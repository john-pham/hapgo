using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

using System.Text;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public class ResponseTime
    {
        public TimeSpan? MinimumValue
        {
            get;
            set;
        }

        public TimeSpan? MaximumValue
        {
            get;
            set;
        }

        public DateTime? MinimumTime
        {
            get;
            set;
        }

        public DateTime? MaximumTime
        {
            get;
            set;
        }
    }
}
