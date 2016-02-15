using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

using System.Text;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public class LogItem
    {
        public string Message
        {
            get;
            set;
        }

        public string Severity { get; set; }

        public string Title { get; set; }

        public DateTime Timestamp { get; set; }

        public string MachineName { get; set; }

        public string AppDomainName { get; set; }

        public string ProcessID { get; set; }

        public string ProcessName { get; set; }

        public string ThreadName { get; set; }

        public string Win32ThreadId { get; set; }

        public string FormattedMessage { get; set; }

        public bool HasSentEmail { get; set; }

        public string TimestampString
        {
            get
            {
                return this.Timestamp.ToString(Services.AppSettings.TimeFormat);
            }
        }
    }
}
