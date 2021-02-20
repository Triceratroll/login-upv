$(function(){

	var newUser;
	var newPass;

	$('#button').click(function(){
			var user = $('#user').val();
			if(user) {
				newUser = user;			
			}

			var pass = $('#pass').val();
			if(pass) {
				newPass = pass;			
			}
			
			//set storage
			chrome.storage.sync.set({'user': newUser })
			//clear input value
			$('#user').val('');

			chrome.storage.sync.set({'pass': newPass})
			$('#pass').val('');

			var notifOptions = {
				type: 'basic',
				iconUrl: 'icon.png',
				title: 'Actualizado !',
				message: 'Perfil actualizado correctamente! '
			};
			chrome.notifications.create('notifActualizado', notifOptions);
			chrome.notifications.clear('notifActualizado');
	});
});

