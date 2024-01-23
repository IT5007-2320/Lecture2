function newsfetch()
{   var newsitems = ["N1", "N2", "N3", "N4", "N5"];
    var tbl = document.getElementById("firstatable");
    for (i=0;i<newsitems.length; i++)
    {
        tr = tbl.insertRow();
        td = tr.insertCell();
        td.innerHTML = newsitems[i]; 
    }
}