using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;

using System.Text;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public class Bookmaker
    {
        public Guid ID
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public string Url
        {
            get;
            set;
        }

        public string UrlValue
        {
            get
            {
                var m_Ret = string.Empty;

                if (!string.IsNullOrEmpty(this.Url))
                {
                    var uh = new UriBuilder(this.Url);
                    //Uri myUri = new Uri(this.Url);
                    m_Ret = uh.Host;
                }

                return m_Ret;
            }
        }
    }
}
