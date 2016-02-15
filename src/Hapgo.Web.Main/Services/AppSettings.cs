namespace Hapgo.Web.Monitoring.Services
{
    public static class AppSettings
    {
        public static string ApiUrl { get; set; }

        public const string DateFormat = "dd/MM/yyyy";
        public const string TimeFormat = "HH:mm:ss";//"hh:mm:ss tt";
        public const string SpanFormat = @"mm\:ss\.fff";
    }
}
