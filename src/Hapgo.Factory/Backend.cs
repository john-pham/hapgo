using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Hapgo.Factory
{
    // This project can output the Class library as a NuGet Package.
    // To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
    public class Backend<T>
    {
        //public T Do(string module)
        //{
        //    var assemblyString = "Caicho.FrontEnd.Dxd";
        //    var obj = (T)Assembly.Load(assemblyString).CreateInstance(string.Format("{0}.Common.{1}", assemblyString, module));

        //    return obj;
        //}
    }
}
