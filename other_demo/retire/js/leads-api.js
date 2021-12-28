$.fn.leads = function (callback) {
	return this.each(function () {
		$(this).closest('form')
			.on('submit', function fn(e) {
				e.preventDefault();
				(callback || $.noop).call(this, this);
			});
	});
};
