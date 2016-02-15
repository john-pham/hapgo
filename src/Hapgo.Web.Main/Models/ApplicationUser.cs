using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Security.Claims;
using Microsoft.AspNet.Identity;

namespace Hapgo.Web.Monitoring.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        //public Guid? ReferenceID { get; set; }

        //public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager, string authenticationType)
        //{
        //    // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
        //    //var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);

        //    // Add custom user claims here
        //    //return userIdentity;

        //    var userIdentity = await manager.AddClaimAsync(this, new Claim("Administrator", "Allowed"));

        //    return new ClaimsIdentity(await manager.GetClaimsAsync(this), authenticationType);
        //}
    }
}
