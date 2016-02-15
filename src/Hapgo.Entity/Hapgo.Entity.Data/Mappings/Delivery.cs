using System.Data.Entity.ModelConfiguration;

namespace Hapgo.Data.Mappings
{
    public class Delivery : EntityTypeConfiguration<Domain.Models.Delivery>
    {
        public Delivery()
        {
            // Primary Key
            HasKey(t => t.ID);

            // Properties
            Property(t => t.ID).IsRequired();

            // Table & Column Mappings
            ToTable("Delivery");

            //
            Property(t => t.ID).HasColumnName("ID");
            Property(t => t.LastName).HasColumnName("LastName");
            Property(t => t.FirstName).HasColumnName("FirstName");
            Property(t => t.UserName).HasColumnName("UserName");
            Property(t => t.Password).HasColumnName("Password");
            Property(t => t.CreatedDate).HasColumnName("CreatedDate");
            Property(t => t.LastLogin).HasColumnName("LastLogin");
            Property(t => t.Description).HasColumnName("Description");
            Property(t => t.IP).HasColumnName("IP");
            Property(t => t.Birthday).HasColumnName("Birthday");
            Property(t => t.Gender).HasColumnName("Gender");
            Property(t => t.CountryID).HasColumnName("CountryID");
            Property(t => t.Email).HasColumnName("Email");
            Property(t => t.HomePhone).HasColumnName("HomePhone");
            Property(t => t.MobilePhone).HasColumnName("MobilePhone");
            Property(t => t.ZipCode).HasColumnName("ZipCode");
            Property(t => t.CurrencyID).HasColumnName("CurrencyID");
            Property(t => t.QuestionID).HasColumnName("QuestionID");
            Property(t => t.Answer).HasColumnName("Answer");
            Property(t => t.Address).HasColumnName("Address");
            Property(t => t.Status).HasColumnName("Status");
            Property(t => t.CommSetting).HasColumnName("CommSetting");
            Property(t => t.Club).HasColumnName("Club");
            Property(t => t.LastModified).HasColumnName("LastModified");
            Property(t => t.Balance).HasColumnName("Balance");
            Property(t => t.Credit).HasColumnName("Credit");
            Property(t => t.ActiveID).HasColumnName("ActiveID");
            Property(t => t.Question).HasColumnName("Question");
            Property(t => t.QuestionName).HasColumnName("QuestionName");
            Property(t => t.MarketingID).HasColumnName("MarketingID");
            Property(t => t.PasswordExpiry).HasColumnName("PasswordExpiry");
        }
    }
}
