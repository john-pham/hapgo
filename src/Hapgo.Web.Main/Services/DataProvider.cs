using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Text;
using System.IO;
//using System.Runtime.Serialization.Json;

namespace Hapgo.Web.Monitoring.Services
{
    public class DataProvider: IDisposable
    {
        private Uri _uri;

        public DataProvider(string app, IDictionary<string, object> param = null)
        {
            string url = String.Format("{0}/{1}", AppSettings.ApiUrl, app);

            if (param != null && param.Count > 0)
            {
                //url += "/?";

                foreach (var item in param)
                {
                    var val = item.Value;

                    if (item.Value != null && typeof(DateTime) == item.Value.GetType())
                    {
                        val = ((DateTime)item.Value).ToString("MM/dd/yyyy");
                    }

                    val = System.Net.WebUtility.UrlEncode(val.ToString());
                    //url += string.Format("{0}={1}&", item.Key, val);
                    url += $"/{val}";
                }
                //
                //url = url.Substring(0, url.Length - 1);
            }

            _uri = new Uri(url);
        }

        public async Task<IEnumerable<T>> Load<T>()
        {
            try
            {
                string data = await DownloadAsync(_uri);
                IEnumerable<T> records = JsonConvert.DeserializeObject<IEnumerable<T>>(data);
                return records;
            }
            catch (Exception ex)
            {
                //AppLogs.WriteError("ServiceProvider.Load", ex);
                return null;
            }
        }

        public async Task<T> Get<T>()
        {
            try
            {
                string data = await DownloadAsync(_uri);
                return JsonConvert.DeserializeObject<T>(data);
            }
            catch (Exception ex)
            {
                //AppLogs.WriteError("ServiceProvider.Load", ex);
                return default(T);
            }
        }

        public async Task<T> Post<T>()
        {
            try
            {
                string data = await PostAsync(_uri);
                return JsonConvert.DeserializeObject<T>(data);
            }
            catch (Exception ex)
            {
                //AppLogs.WriteError("ServiceProvider.Load", ex);
                return default(T);
            }
        }

        public async Task<T> Put<T>()
        {
            try
            {
                string result = await PutAsync(_uri);
                return JsonConvert.DeserializeObject<T>(result);
            }
            catch (Exception ex)
            {
                return default(T);
            }
        }

        public async Task<T> Delete<T>()
        {
            try
            {
                string data = await DeleteAsync(_uri);
                return JsonConvert.DeserializeObject<T>(data);
            }
            catch (Exception ex)
            {
                //AppLogs.WriteError("ServiceProvider.Load", ex);
                return default(T);
            }
        }

        public async Task<T> Post<T>(object value)
        {
            try
            {
                var data = await PostAsync(_uri, value);
                return JsonConvert.DeserializeObject<T>(data);
            }
            catch (Exception ex)
            {
                //AppLogs.WriteError("ServiceProvider.Load", ex);
                return default(T);
            }
        }

        private async Task<string> DownloadAsync(Uri url)
        {
            HttpClient client = new HttpClient();

            //client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(Global.Token.token_type, Global.Token.access_token);

            var message = new HttpRequestMessage(HttpMethod.Get, url);

            using (var response = await client.SendAsync(message))
            {
                return await response.Content.ReadAsStringAsync();
            }
        }

        private async Task<string> PostAsync(Uri url)
        {
            HttpClient client = new HttpClient();

            //client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(Global.Token.token_type, Global.Token.access_token);

            var message = new HttpRequestMessage(HttpMethod.Post, url);

            using (var response = await client.SendAsync(message))
            {
                return await response.Content.ReadAsStringAsync();
            }
        }

        private async Task<string> PostAsync(Uri url, object value)
        {
            HttpClient client = new HttpClient();

            //string postBody = JsonSerializer(value);
            string postBody = JsonConvert.SerializeObject(value);
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            //client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(Global.Token.token_type, Global.Token.access_token);

            using (var response = await client.PostAsync(url, new StringContent(postBody, Encoding.UTF8, "application/json")))
            {
                return await response.Content.ReadAsStringAsync();
            }
        }

        private async Task<string> PutAsync(Uri url)
        {
            HttpClient client = new HttpClient();

            //string postBody = JsonSerializer(value);
            string postBody = JsonConvert.SerializeObject(null);
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            //client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(Global.Token.token_type, Global.Token.access_token);

            using (var response = await client.PutAsync(url, new StringContent(postBody, Encoding.UTF8, "application/json")))
            {
                return await response.Content.ReadAsStringAsync();
            }
        }

        private async Task<string> DeleteAsync(Uri url)
        {
            HttpClient client = new HttpClient();

            //client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue(Global.Token.token_type, Global.Token.access_token);

            using (var response = await client.DeleteAsync(url))
            {
                return await response.Content.ReadAsStringAsync();
            }
        }

        //private string JsonSerializer<V>(V objectToSerialize)
        //{
        //    if (objectToSerialize == null)
        //    {
        //        throw new ArgumentException("objectToSerialize must not be null");
        //    }

        //    var ms = new MemoryStream();
        //    var serializer = new DataContractJsonSerializer(objectToSerialize.GetType());
        //    serializer.WriteObject(ms, objectToSerialize);
        //    ms.Seek(0, SeekOrigin.Begin);
        //    var sr = new StreamReader(ms);
        //    return sr.ReadToEnd();
        //}

        public void Dispose()
        {
        }
    }
}
