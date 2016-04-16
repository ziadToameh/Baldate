using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

/// <summary>
/// Summary description for MemberShipService
/// </summary>
public class MemberShipService
{
        private readonly MembershipProvider _provider;

        public MemberShipService()
            : this(null)
        {
        }

        public MemberShipService(MembershipProvider provider)
        {
            _provider = provider ?? Membership.Provider;
        }

        public int MinPasswordLength
        {
            get
            {
                return _provider.MinRequiredPasswordLength;
            }
        }

        public bool IsUserApproved(string userName)
        {
            MembershipUser user = _provider.GetUser(userName, false);

            if (user == null) return false;
            return user.IsApproved;
        }

        public bool ValidateUser(string userName, string password)
        {
            if (String.IsNullOrEmpty(userName)) throw new ArgumentException("Value cannot be null or empty.", "userName");
            if (String.IsNullOrEmpty(password)) throw new ArgumentException("Value cannot be null or empty.", "password");

            return _provider.ValidateUser(userName, password);

        }

        public MembershipCreateStatus CreateUser(string userName, string password, string email, string passwordQuestion, string passwordAnswer, bool isActive)
        {
            if (String.IsNullOrEmpty(userName)) throw new ArgumentException("Value cannot be null or empty.", "userName");
            if (String.IsNullOrEmpty(password)) throw new ArgumentException("Value cannot be null or empty.", "password");
            if (String.IsNullOrEmpty(email)) throw new ArgumentException("Value cannot be null or empty.", "email");

            MembershipCreateStatus status;

            // the account is created with approval to login
            _provider.CreateUser(userName, password, email, passwordQuestion, passwordAnswer, isActive, null, out status);

            try
            {
                // specify the role of the user

                //if (!Roles.IsUserInRole("Public"))
                //    Roles.AddUserToRole(userName, "Public");

                return status;

            }
            catch (Exception ex)
            {
                //AppLogger.Write(ex.Message);
                return MembershipCreateStatus.DuplicateUserName;
            }
        }


        public bool ChangePassword(string userName, string oldPassword, string newPassword)
        {
            if (String.IsNullOrEmpty(userName)) throw new ArgumentException("Value cannot be null or empty.", "userName");
            if (String.IsNullOrEmpty(oldPassword)) throw new ArgumentException("Value cannot be null or empty.", "oldPassword");
            if (String.IsNullOrEmpty(newPassword)) throw new ArgumentException("Value cannot be null or empty.", "newPassword");

            // The underlying ChangePassword() will throw an exception rather
            // than return false in certain failure scenarios.
            try
            {
                MembershipUser currentUser = _provider.GetUser(userName, true /* userIsOnline */);
                return currentUser.ChangePassword(oldPassword, newPassword);
            }
            catch (ArgumentException)
            {
                return false;
            }
            catch (MembershipPasswordException)
            {
                return false;
            }
        }

        public MembershipUser GetUser(string userName, bool isOnline)
        {
            if (String.IsNullOrEmpty(userName)) throw new ArgumentException("Value cannot be null or empty.", "userName");


            MembershipUser user;
            user = _provider.GetUser(userName, isOnline);
            return user;
        }

        public string ResetPassword(string userName, string passwordAnswer)
        {
            try
            {
                MembershipUser currentUser = _provider.GetUser(userName, false /* userIsOnline */);
                return currentUser.ResetPassword(passwordAnswer);
            }
            catch (ArgumentException)
            {
                return "";
            }
        }

        public string ResetPassword(string userName)
        {
            try
            {
                MembershipUser currentUser = _provider.GetUser(userName, false /* userIsOnline */);
                return currentUser.ResetPassword();
            }
            catch (ArgumentException)
            {
                return "";
            }
        }

        public bool DeleteUser(string username)
        {
            if (String.IsNullOrEmpty(username)) return false;
            try
            {
                return _provider.DeleteUser(username, true);
            }
            catch (Exception)
            {
                return false;
            }
        }

        public bool UpdateUser(MembershipUser userToEdit)
        {
            try
            {
                _provider.UpdateUser(userToEdit);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
}
