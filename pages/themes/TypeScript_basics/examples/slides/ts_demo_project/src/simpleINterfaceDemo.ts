export {}
interface Point{
	x:number,
	y:number
}

function drawPoint(obj:any) {
	console.log(obj.x, obj.y);
}

drawPoint({
	x:1,
	y:2,
	z:3
})