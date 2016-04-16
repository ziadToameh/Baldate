﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class UserControls_CommonLinks : System.Web.UI.UserControl
{
    LinkRepository rep = new LinkRepository();
    public int Counter = 0;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
            GetData();
    }

    public void GetData()
    {
        IEnumerable<Link> result;

        result = rep.GetAll().OrderByDescending(n => n.Id);

        AdsList.DataSource = result;
        AdsList.DataBind();

    }
}