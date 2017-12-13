//interact.js file. Has necessary functions of every draggable object

interact('.draggable')

.draggable({
	inertia: true,
	autoScroll: true,
	onmove: dragMoveListener
});

function dragMoveListener (event) {
	var target = event.target,
	x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
	y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	target.style.webkitTransform =
	target.style.transform =
		'translate(' + x + 'px, ' + y + 'px)';

	target.setAttribute('data-x', x);
	target.setAttribute('data-y', y);
}

window.dragMoveListener = dragMoveListener;