/*
 * Tabify
 * Author: chonla
 * URL: https://github.com/chonla/tabify
 */
(function($){
	$.fn.tabify = function(options) {
		var default_options = {
			'tab_selector' : '.tab',
			'tabbody_selector' : '.tabbody',
			'tablink_attribute' : 'rel',
			'default_tab' : ''
		};
		var opt = $.extend(default_options, options);
		
		this.each(function(){
			var w = $(this);
			// Tab clicked
			w.find(opt.tab_selector).on('click', function(){
				var link = $(this).attr(opt.tablink_attribute);
				if (w.data('activeTab')!=link) {
					w.find(opt.tabbody_selector+'['+opt.tablink_attribute+'="'+link+'"]').show();
					w.find(opt.tabbody_selector+'['+opt.tablink_attribute+'!="'+link+'"]').hide();
					w.find(opt.tab_selector+'['+opt.tablink_attribute+'="'+link+'"]').addClass('tab_active');
					w.find(opt.tab_selector+'['+opt.tablink_attribute+'!="'+link+'"]').removeClass('tab_active');
					w.data('activeTab', link);
				}
			});
			
			// Activate default tab
			if (opt.default_tab == '') {
				opt.default_tab = w.find(opt.tab_selector+':first-child').attr(opt.tablink_attribute);
			}
			w.find(opt.tab_selector+'['+opt.tablink_attribute+'="'+opt.default_tab+'"]').click();
		});
	};
})(jQuery);