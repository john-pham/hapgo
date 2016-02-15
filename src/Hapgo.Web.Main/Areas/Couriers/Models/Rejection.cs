using System;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public class Rejection
    {
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

        public HedgeLogStatus Status
        {
            get;
            set;
        }

        public string ErrorTypeString
        {
            get
            {
                return this.Status.ToString();
            }
        }

        public string Trace
        {
            get;
            set;
        }

        public string Error
        {
            get;
            set;
        }

        public string UserName
        {
            get;
            set;
        }

        public Guid? Reference { get; set; }

        public string IP
        {
            get;
            set;
        }
    }
}
