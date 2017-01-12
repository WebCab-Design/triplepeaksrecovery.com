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

	function getElmentPostion (element) {
		var elements = element.parentNode.children;

		for (var i = 0; i < elements.length; i++) {
			var isSameNode = elements[i].isSameNode(element);

			if (isSameNode) {
				return i;
			}
		}

	}

	var el = document.querySelector('query');
	var index = getElmentPostion(el);

});
