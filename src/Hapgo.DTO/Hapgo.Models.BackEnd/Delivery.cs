using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace Hapgo.Models.BackEnd
{
    [DataContract]
    public class Delivery
    {
        [DataMember]
        public string Name
        {
            get;
            set;
        }

        [DataMember]
        public Guid ID
        {
            get;
            set;
        }
    }
}
