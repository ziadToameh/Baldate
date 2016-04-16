using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Culture
/// </summary>
public class Culture
{
    public const string CULTURE_AR = "ar-LB";
    //Arabic-Lebanon
    public const string CULTURE_EN = "en-US";
    //English - United states
    public const string CULTURE_FR = "fr-FR";
    //English - United states
    public const string CULTURE_SESSION_KEY = "culture1";
    //session to store the culture variable

    public enum ENUM_CULTURE_NAME
    {
        ENUM_CULTURE_NAME_ARABIC = 1,
        ENUM_CULTURE_NAME_ENGLISH = 2,
        ENUM_CULTURE_NAME_FRENCH = 3
    }

    private string selectedCulture_;

    //session to store the culture variable
    public void setCutlture(string Cult)
    {
        selectedCulture_ = Cult;
    }
    public string getCutlture()
    {
        return (selectedCulture_);
    }
}