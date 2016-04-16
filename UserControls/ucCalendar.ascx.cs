using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.UI;
using Calendar = System.Web.UI.WebControls.Calendar;

public partial class UserControls_ucCalendar : System.Web.UI.UserControl
{
    public int Offset, MonthOffset;
    protected void Page_Load(object sender, EventArgs e)
    {
        var dt = DateTime.Now;

        CultureInfo originalCulture = Thread.CurrentThread.CurrentCulture;

        var generalDate = new System.Globalization.CultureInfo("ar-LB", false).DateTimeFormat;
        var HijriDTF = new System.Globalization.CultureInfo("ar-LB", false).DateTimeFormat;

        HijriDTF.Calendar = new System.Globalization.HijriCalendar();
        HijriDTF.ShortDatePattern = "dd/MM/yyyy";
        HijriDTF.MonthDayPattern = "MMMM";
        
        try { Offset = int.Parse(System.Configuration.ConfigurationManager.AppSettings["Offset"]); }
        catch (Exception)
        { Offset = 0; }

        lbldate.Text += dt.ToString("ddd d MMM yyyy", generalDate);
        
        //try { MonthOffset = int.Parse(System.Configuration.ConfigurationManager.AppSettings["MonthOffset"]); }
        //catch (Exception) { MonthOffset = 0; }
    }
}