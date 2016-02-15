using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace Hapgo.Models.BackEnd
{
    [DataContract]
    public class Pagination<T>
    {
        [DataMember]
        public IList<T> Data { get; set; }

        [DataMember]
        public int TotalItems
        {
            get;
            set;
        }

        [DataMember]
        public int SelectedPage
        {
            get;
            set;
        }
    }
}
