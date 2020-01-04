'use strict';

const block = document.querySelector('.cube');

window.addEventListener('mousemove', handleMouseMove);

function handleMouseMove({ clientX, clientY }) {
	block.style.transform = `translateX(${clientX}px) translateY(${clientY}px)`;
}