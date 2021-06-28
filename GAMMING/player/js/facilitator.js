//var socket = io(SOCKET_URL);
//socket.emit('join_workshop', workshop_id);

function changeSlide(slide){
	console.log('slide', slide);
	socket.emit('changeSlide_socket', workshop_id, slide);
    socket.on('changeSlide_socket_rcv', function(responce){
    	
    });
}
