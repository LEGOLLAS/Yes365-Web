$("input:text").each(function ()
{
    var v = this.value;
    $(this).blur(function ()
    {
        if (this.value.length == 0) this.value = v;
    }).focus(function ()
    {
        this.value = "";
    });
});
