using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

using System.Text;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public class Log
    {
        public DateTime CreatedDate
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public string Title
        {
            get;
            set;
        }

        public string CreatedDateString
        {
            get
            {
                return this.CreatedDate.ToString(Services.AppSettings.TimeFormat);
            }
        }
    }
}
