﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Admin_NewsLetterUnSubscribe : System.Web.UI.Page
{
    NewsLetterRepository rep = new NewsLetterRepository();
    private int _id;
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            _id = int.Parse(Request.QueryString["id"]);
            rep.Delete(_id);
        }
        catch
        {
        }
        Response.Redirect("NewsLettersList.aspx");

    }
}