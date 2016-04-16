<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="MessageNotSent.aspx.cs" Inherits="MessageNotSent" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<h3>
<asp:label runat="server" ID="messagesent" ForeColor="Red"
        Text="لم يتم إنهاء العملية بسبب ضعف في سرعة الإنترنت."></asp:label>
        <br /> <br />
        
<asp:label runat="server" ID="Label1" 
        Text="الرجاء إعادة المحاولة ."></asp:label></h3>
</asp:Content>

