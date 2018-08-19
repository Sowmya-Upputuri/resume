function json(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if (xhr.readyState=="4" && xhr.status=="200") {
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
//function calling
json("data.json",function(text){
	let d=JSON.parse(text);
	console.log(d);
	carr(d.carrier);
	basics(d.basicdetails);
	edu(d.education);
	techskills(d.skills);
	ache(d.achievement);
})

var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);

function basics(b) {
	
	var i=document.createElement("img");
	i.src=b.image;
	i.alt="profile photo";
	l.appendChild(i);
	var nam=document.createElement("h2");
	nam.textContent=b.name;
	l.appendChild(nam);
	var number=document.createElement("h3");
	number.textContent=b.phone;
	l.appendChild(number);
	var em=document.createElement("h3");
	em.textContent=b.email;
	l.appendChild(em);
	var add=document.createElement("h3");
	add.textContent=b.address;
	l.appendChild(add);
}
	var r=document.createElement("div");
	r.classList.add("right");
	r.setAttribute("id","b.tech");
	main.appendChild(r);

	function edu(e){
		var e1=document.createElement("div");
		e1.classList.add("educa");
		r.appendChild(e1);
		var head=document.createElement("h2");
		head.textContent="Educational details";
		e1.appendChild(head);
		head.appendChild(document.createElement("HR"));

		for (var i = 0; i < e.length; i++){
			var h=document.createElement("h2");
			h.textContent=e[i].cource;
			e1.appendChild(h);
			var u=document.createElement("ul");
			e1.appendChild(u);
			var list=document.createElement("li");
			list.textContent=e[i].college;
			u.appendChild(list);
			var list1=document.createElement("li");
			list1.textContent=e[i].percentage;
			list.appendChild(list1);

}

}
function techskills(s){
	var d=document.createElement("div");
	d.textContent="Skill Set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for (var i = 0;i<s.length; i++) {
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}

function carr(car) {
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="Carrier Objectives";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=car.ca;
	c1.appendChild(para);
}
function ache(ach){
	var d=document.createElement("div");
	d.setAttribute("id","achievement");
	r.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="achievement";
	d.appendChild(h);
	h.appendChild(document.createElement("HR"));
	for (i in ach){
		var u=document.createElement("ul");
		d.appendChild(u);
		var list=document.createElement("li");
		list.textContent=ach[i];
		u.appendChild(list);
		
	}
}