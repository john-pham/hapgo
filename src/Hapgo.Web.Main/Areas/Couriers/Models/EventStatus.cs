using System;

namespace Hapgo.Web.Monitoring.Areas.Events.Models
{
    public enum EventStatus : byte
    {
        None = 0,

        Pending = 1,

        Rejected = 2,

        Running = 3,

        Win = 4,

        Lose = 5,

        Drawn = 6,

        Refunded = 7,

        Void = 8,

        Unknown = 255,

        LoseHalf = 9,

        StakeRefund = 10,

        WinHalf = 11,

        Completed = 12,

        Cancelled = 13,
    }
}
