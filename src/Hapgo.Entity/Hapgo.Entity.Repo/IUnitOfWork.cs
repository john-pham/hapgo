﻿using Hapgo.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hapgo.Repo
{
    public interface IUnitOfWork
    {
        //void Dispose();
        void Save();
        //void Dispose(bool disposing);
        IRepository<T> Repository<T>() where T : class, IObjectState;
    }
}
