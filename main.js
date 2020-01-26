jQuery(function($) { $(document).ready( function() {

	header = $('header');
	nav = $('nav');
	section = $('section');

	nav.hover(toggleNav, toggleNav);
	section.hover(toggleSection, toggleSection);

	function toggleNav(){
		header.toggleClass('mini');
		nav.toggleClass('focus');
		section.toggleClass('close');
		console.log('toggleNav');

	}
	function toggleSection(){
		header.toggleClass('close');
		nav.toggleClass('mini');
		section.toggleClass('focus');
		console.log('toggleSection');

	}


    




}); });