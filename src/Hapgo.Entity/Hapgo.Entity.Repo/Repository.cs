using Hapgo.Data;
using Hapgo.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Hapgo.Repo
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class, IObjectState
    {
        internal IDbContext Context;
        internal IDbSet<TEntity> DbSet;

        public Repository(IDbContext context)
        {
            Context = context;
            DbSet = context.Set<TEntity>();
        }

        public virtual TEntity FindById(object id)
        {
            return DbSet.Find(id);
        }

        //public virtual void InsertGraph(TEntity entity)
        //{
        //    DbSet.Add(entity);
        //}

        public virtual void Update(TEntity entity, ObjectState state)
        {
            entity.ObjectState = state;
            DbSet.Attach(entity);
        }

        public virtual void Delete(object id)
        {
            var entity = DbSet.Find(id);
            //var objectState = entity as IObjectState;
            //if (objectState != null)
            //    objectState.ObjectState = ObjectState.Deleted;
            Delete(entity);
        }

        public virtual void Delete(TEntity entity)
        {
            entity.ObjectState = ObjectState.Deleted;
            DbSet.Attach(entity);
            DbSet.Remove(entity);
        }

        //public virtual void Insert(TEntity entity)
        //{
        //    entity.ObjectState = ObjectState.Added;
        //    DbSet.Attach(entity);
        //}

        public virtual RepositoryQuery<TEntity> Query()
        {
            var repositoryGetFluentHelper =
                new RepositoryQuery<TEntity>(this);

            return repositoryGetFluentHelper;
        }

        public IQueryable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>,
                IOrderedQueryable<TEntity>> orderBy = null,
            List<Expression<Func<TEntity, object>>>
                includeProperties = null,
            int? page = null,
            int? pageSize = null)
        {
            IQueryable<TEntity> query = DbSet;

            if (includeProperties != null)
                includeProperties.ForEach(i => { query = query.Include(i); });

            if (filter != null)
                query = query.Where(filter);

            if (orderBy != null)
                query = orderBy(query);

            if (page != null && pageSize != null)
                query = query
                    .Skip((page.Value - 1) * pageSize.Value)
                    .Take(pageSize.Value);

            return query;
        }
    }
}
