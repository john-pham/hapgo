using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace Hapgo.Models.BackEnd
{
    [DataContract]
    public class DeliveryItem
    {
        [DataMember]
        public Guid DeliveryID
        {
            get;
            set;
        }

        [DataMember]
        public Guid ServiceID
        {
            get;
            set;
        }
    }
}
