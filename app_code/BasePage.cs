using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for BasePage
/// </summary>
public class BasePage : System.Web.UI.Page
{
    protected override void InitializeCulture()
    {
        try
        {
            // NOTE: hidden arabic culture
            //string cultureStr = Request.QueryString["Lang"] ?? (string)Session["CULTURE_Language"] ?? "ar-LB";
            string cultureStr = "ar-LB";

            //if (Session["CULTURE"] != null)
            //{
            //    Culture cltr = new Culture();
            //    cltr = (Culture)Session["CULTURE"];
            //    cultureStr = cltr.getCutlture();
            //}
            //else
            //{

            var cltr = new Culture();
            cltr.setCutlture(cultureStr);
            Session["CULTURE"] = cltr;

            //}

            Session["CULTURE_Language"] = cultureStr;
            //set the arabic to be the default language

            var ci = new System.Globalization.CultureInfo(cultureStr);
            System.Threading.Thread.CurrentThread.CurrentCulture = ci;
            System.Threading.Thread.CurrentThread.CurrentUICulture = ci;

            base.InitializeCulture();
        }
        catch (Exception ex)
        {
            // Log eventual errors and rethrow them
        }
    }
    //this sub overrides the OnPreInit and set the style sheet based on English or arabic language
    protected override void OnPreInit(System.EventArgs e)
    {
        try
        {
            //removed from global themes; placed in same folder as application
            //if ((Session[global::Culture.CULTURE_SESSION_KEY] != null) && (Session[global::Theme.THEME_SESSION_KEY] != null))
            //{

            //    Page.Theme = Session[global::Theme.THEME_SESSION_KEY] + "_" + Session[global::Culture.CULTURE_SESSION_KEY];
            //}

            //else
            //{

            //    Page.Theme = "Grass_ar-LB";
            //}
        }
        catch (Exception ex)
        {
            // Log eventual errors and rethrow them
        }

    }

    //this sub overrides the init Page sub in order to check if the session is timeout ,so
    //we redirect the user to the default page
    protected override void OnInit(System.EventArgs e)
    {
        try
        {
            base.OnInit(e);

            //Check if the given page supports session or not (this tested as reliable indicator
            // if EnableSessionState is true), should not care about a page that does not need session

            if ((Context.Session != null))
            {
                //Tested and the IsNewSession is more advanced then simply checking if
                // a cookie is present, it does take into account a session timeout, because
                // I tested a timeout and it did show as a new session

                if (Session.IsNewSession)
                {
                    // If it says it is a new session, but an existing cookie exists, then it must
                    // have timed out (can't use the cookie collection because even on first
                    // request it already contains the cookie (request and response
                    // seem to share the collection)
                    string szCookieHeader = Request.Headers["Cookie"];

                    if ((szCookieHeader != null) && szCookieHeader.IndexOf("ASP.NET_SessionId") >= 0)
                    {
                        Session["new"] = "new";
                        Response.Redirect("Default.aspx");
                    }
                }
            }
        }
        catch (Exception ex)
        {
            // Log eventual errors and rethrow them
            //ErrorSignal.FromContext(Context).Raise(ex);
            //Utilities.LogError(ex);
            Response.Redirect("default.aspx");
        }
    }
}

