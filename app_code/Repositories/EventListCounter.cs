using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for EventListCounter
/// </summary>
public class EventListCounter
{
	public EventListCounter()
	{
	}

    public int _Id;
    public string _Name_Ar;
    public Nullable<DateTime> _DateAdded;
    public int _CategoryId;
    public int _ActiveComments;
    public int _InActiveComments;
    public int _TotalComments;


    public int Id
    {
        get { return _Id; }
        set { _Id = value; }
    }

    public string Name_Ar
    {
        get { return _Name_Ar; }
        set { _Name_Ar = value; }
    }

    public Nullable<DateTime> DateAdded
    {
        get { return _DateAdded; }
        set { _DateAdded = value; }
    }

    public int CategoryId
    {
        get { return _CategoryId; }
        set { _CategoryId = value; }
    }

    public int ActiveComments
    {
        get { return _ActiveComments; }
        set { _ActiveComments = value; }
    }

    public int InActiveComments
    {
        get { return _InActiveComments; }
        set { _InActiveComments = value; }
    }

    public int TotalComments
    {
        get { return _TotalComments; }
        set { _TotalComments = value; }
    }

}