using Hapgo.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Hapgo.Repo
{
    public interface IRepository<TEntity> where TEntity : class, IObjectState
    {
        TEntity FindById(object id);
        //void InsertGraph(TEntity entity);
        void Update(TEntity entity, ObjectState state);
        void Delete(object id);
        void Delete(TEntity entity);
        //void Insert(TEntity entity);
        RepositoryQuery<TEntity> Query();
        IQueryable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>,
                IOrderedQueryable<TEntity>> orderBy = null,
            List<Expression<Func<TEntity, object>>>
                includeProperties = null,
            int? page = null,
            int? pageSize = null);
    }
}
