using Hapgo.Data.Mappings;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hapgo.Data
{
    public class HapgoContext : DbContext, IDbContext
    {
        static HapgoContext()
        {
            Database.SetInitializer<HapgoContext>(null);
        }

        public HapgoContext()
            //: base("Name=HapgoContext")
            //: base("Data:HapgoContext:ConnectionString")
            //: base ("data source=88.150.212.114;initial catalog=HapgoV2.0.1;persist security info=True;user id=dv;password=tuyenpham;multipleactiveresultsets=True;App=EntityFramework")
            : base("data source=localhost;initial catalog=HapgoV2.0.1;persist security info=True;user id=Hapgouser;password=Sj123!;multipleactiveresultsets=True;App=EntityFramework")
        {
        }

        public new IDbSet<T> Set<T>() where T : class
        {
            return base.Set<T>();
        }

        public override int SaveChanges()
        {
            this.ApplyStateChanges();
            return base.SaveChanges();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new Delivery());
        }
    }
}
