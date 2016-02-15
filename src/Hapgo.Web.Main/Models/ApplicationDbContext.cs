using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;
using Hapgo.Web.Monitoring.Areas.Events.Models;

namespace Hapgo.Web.Monitoring.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            //builder.Entity<IdentityUser>().ToTable("Users");
            ////builder.Entity<ApplicationUser>().ToTable("Users");
            //builder.Entity<IdentityRole>().ToTable("Roles");
            //builder.Entity<IdentityUserRole<string>>().ToTable("UserRoles");
            //builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims");
            //builder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins");
            //builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaims");
            foreach (var entityType in builder.Model.GetEntityTypes())
            {
                var table = entityType.Relational().TableName;
                if (table.StartsWith("AspNet"))
                    entityType.Relational().TableName = table.Substring(6);
            }
        }
        public DbSet<Agent> Agent { get; set; }
    }
}
