<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Search.aspx.cs" Inherits="Search" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<<script>
     (function () {
         var cx = '018015130400341885059:_64oy7qzdwi';
         var gcse = document.createElement('script');
         gcse.type = 'text/javascript';
         gcse.async = true;
         gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
             '//www.google.com/cse/cse.js?cx=' + cx;
         var s = document.getElementsByTagName('script')[0];
         s.parentNode.insertBefore(gcse, s);
     })();
</script>
<gcse:searchresults-only></gcse:searchresults-only></asp:Content>

