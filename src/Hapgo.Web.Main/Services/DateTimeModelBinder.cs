using System;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc.ModelBinding;

namespace Hapgo.Web.Monitoring.Services
{
    public class DateTimeModelBinder : IModelBinder
    {
        public Task<ModelBindingResult> BindModelAsync(ModelBindingContext bindingContext)
        {
            if (bindingContext.ModelType == typeof(DateTime) || bindingContext.ModelType == typeof(DateTime?))
            {
                var displayFormat = bindingContext.ModelMetadata.DisplayFormatString;

                //if (Controls.Global.UserInfo != null)
                {
                    displayFormat = AppSettings.DateFormat;//Controls.Global.UserInfo.FormatDate;
                }

                var value = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);

                if (!string.IsNullOrEmpty(displayFormat) && value != null && !string.IsNullOrEmpty(value.FirstOrDefault()))
                {
                    DateTime date;
                    //displayFormat = displayFormat.Replace("{0:", string.Empty).Replace("}", string.Empty);
                    // use the format specified in the DisplayFormat attribute to parse the date
                    if (DateTime.TryParseExact(value.FirstOrDefault(), displayFormat, CultureInfo.InvariantCulture, DateTimeStyles.None, out date))
                    {
                        bindingContext.Model = date;
                        return Task.FromResult(new ModelBindingResult());
                    }
                    else
                    {
                        bindingContext.ModelState.AddModelError(
                            bindingContext.ModelName,
                            string.Format("{0} is an invalid date format", value.FirstOrDefault())
                        );
                    }
                }
            }

            return Task.FromResult(new ModelBindingResult());
        }
    }
}