//Global function that cools container once it is clicked. Obeys Newton's Law of Cooling.

var SURR_TEMP=30

function cool(idx_container)
{
	var cool_id=setInterval(function(){
		var where=$("#"+idx_container)
		var temp=where[0].getAttribute("data-temp")
		temp=temp-((temp-SURR_TEMP)*(0.01))
		temp=temp.toFixed(3)
		where[0].setAttribute("data-temp", temp)
		console.log(temp)
	}, 500)
}