using System;
using System.Collections.Generic;

namespace Hapgo.Services
{
    public interface IDelivery
    {
        IList<Models.BackEnd.Delivery> Items { get; }

    }
}
