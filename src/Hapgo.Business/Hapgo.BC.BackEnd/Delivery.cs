using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hapgo.BC.BackEnd
{
    public class Delivery : Services.IDelivery
    {
        public enum Status : byte
        {
            Suspend = 0,
            Open = 1,
            Close = 2,
            Block = 3,
            Deleted = 4
        }

        public IList<Models.BackEnd.Delivery> Items
        {
            get
            {
                var m_Ret = default(List<Models.BackEnd.Delivery>);

                using (var context = new Entities())
                {
                    var list = from l in context.Deliveries
                               where l.Status != (byte)Status.Deleted
                               orderby l.UserName
                               select new Models.BackEnd.Delivery
                               {
                                   ID = l.ID,
                                   Name = l.UserName
                               };

                    m_Ret = list.ToList();
                }

                return m_Ret;
            }
        }
    }
}
