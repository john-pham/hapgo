using System;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public class Event
    {
        public string UserName
        {
            get;
            set;
        }

        public string Code
        {
            get;
            set;
        }

        public DateTime? CreatedDate
        {
            get;
            set;
        }

        public string CreatedDateString
        {
            get
            {
                return this.CreatedDate?.ToString(Services.AppSettings.TimeFormat);
            }
        }

        public string SboReference
        {
            get;
            set;
        }

        public string SboStatus
        {
            get;
            set;
        }

        public EventStatus Status
        {
            get;
            set;
        }

        public string StatusString
        {
            get
            {
                return this.Status.ToString();
            }
        }

        public TimeSpan? ResponseTime
        {
            get;
            set;
        }

        public string ResponseTimeString
        {
            get
            {
                return this.ResponseTime?.ToString(Services.AppSettings.SpanFormat);
            }
        }

        public string IP
        {
            get;
            set;
        }
    }
}
