/*
function toggle()
{
	var x = document.getElementById("rc");
	var y = document.getElementById("rs");
	var z = document.getElementById("rm");
	var a = document.getElementById("hobby1");
	var b = document.getElementById("hobby2");
	var c = document.getElementById("hobby3");
	
	if(x.checked==true)
	{
		b.style.display = "none";
	    c.style.display = "none";
		a.style.display = "block";
	}
	if(y.checked==true)
	{
		c.style.display = "none";
		a.style.display = "none";
		b.style.display = "block";
	}
	if(z.checked==true)
	{
		a.style.display = "none";
		b.style.display = "none";
		c.style.display = "block";
	}
}
*/
function toggle()
{
	var a = document.getElementsByClassName("input1");
	var b = document.getElementsByClassName("hobby_div");
	
	if(a[0].checked==true)
	{
		b[1].style.display = "none";
	    b[2].style.display = "none";
		b[0].style.display = "block";
	}
	if(a[1].checked==true)
	{
		b[0].style.display = "none";
		b[2].style.display = "none";
		b[1].style.display = "block";
	}
	if(a[2].checked==true)
	{
		b[0].style.display = "none";
		b[1].style.display = "none";
		b[2].style.display = "block";
	}
}

/*
function hide()
{
	var a = document.getElementById("hobby1");
	var b = document.getElementById("hobby2");
	var c = document.getElementById("hobby3");
	a.style.display = "none";
	b.style.display = "none";
	c.style.display = "none";
}
*/
function submit1()
{
	alert("Form submitted successfully!");
}
