using Hapgo.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hapgo.BC.BackEnd
{
    internal class Entities : Repo.UnitOfWork, IDisposable
    {
        //public Repo.UnitOfWork base { get; set; }

        public IQueryable<Domain.Models.Delivery> Deliveries
        {
            get
            {
                return base.Repository<Domain.Models.Delivery>().Get();
            }
        }

        public Entities()
        {
            //this.base = new Repo.UnitOfWork(new Data.TrototContext());
        }

        public T Add<T>(T value) where T : class, IObjectState
        {
            var rep = base.Repository<T>();
            rep.Update(value, ObjectState.Added);

            return value;
        }

        public T Edit<T>(T value) where T : class, IObjectState
        {
            var rep = base.Repository<T>();
            rep.Update(value, ObjectState.Modified);

            return value;
        }

        public T Find<T>(object id) where T : class, IObjectState
        {
            var repo = base.Repository<T>();
            var item = repo.FindById(id);

            return item;
        }

        public void Delete<T>(T value) where T : class, IObjectState
        {
            var rep = base.Repository<T>();
            rep.Delete(value);
        }

        public override void Dispose(bool disposing)
        {
            base.Dispose(disposing);
        }
    }
}
