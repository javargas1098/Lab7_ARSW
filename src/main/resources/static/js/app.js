app = (function() {
	// Codigo realizado en conjunto con Javier Vargas
	var actualizarTabla = function(cine) {
		$("#Table").find('tbody').empty();
		var table = $("#Table");
		for (var i = 0; i < cine.functions.length; i++) {
			table.append("<tbody><tr><td>" + cine.name + "</td><td>"
					+ cine.functions[i].movie.name + "</td><td>"
					+ cine.functions[i].date + "</td><td>"
					+ cine.functions[i].seats.length + "</td></tr><tbody>")
		}
	}

	return {
		getCinemaByName : function(name) {
			return apiclient.getCinemaByName(name, function(cine) {
				actualizarTabla(cine);
			});
		}
	}
	

})();