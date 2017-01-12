window.addEventListener('DOMContentLoaded', function () {

	var form = document.querySelector('.form');
	if (form) {
		Astatine.submit({
			query: form,
			method: 'post',
			responseType: 'json',
			action: 'https://www.enformed.io/zpn17s0',
			prepare: function (data, resolve) {
				data['*default_email'] = 'bburns@peaksrecovery.com';
				return resolve(data);
			},
			complete: function (error, success) {
				var response = document.querySelector('.response');
				if (error) {
					console.log(error);
					response.style.color = 'red';
					response.innerText = 'Error Plese See Console';
				} else {
					response.style.color = 'green';
					response.innerText = 'Form Is Submitted';
				}
			}
		});
	}

	var panels = document.querySelectorAll('.panel');
	var tabs = document.querySelectorAll('.tab');

	for (var i = 0; i < tabs.length; i++) {
		var tab = tabs[i];
		var panel = panels[i];

		panel.setAttribute('data-index', i);
		var index = panel.getAttribute('data-index');
		// console.log(index);

		tab.addEventListener('click', function () {
			panel[index].classList.toggle('active');
		});

	}

});
