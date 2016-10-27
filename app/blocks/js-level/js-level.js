import $ from 'jquery';

export default () => {
	const $marker = $('.js-level__marker');
	const $scale = $('.js-level__scale');
	const scaleOffset = $scale.offset().left;
	const initialLevel = $marker.data().level;
	const levels = [
		() => $marker.css('left', '-5px'),
		() => $marker.css('left', '144px'),
		() => $marker.css('left', '369px'),
		() => $marker.css('left', '761px')
	];

	const getLevel = offset => {
		if (offset < 120) {
			return 0;
		}
		if (offset < 335) {
			return 1;
		}
		if (offset < 600) {
			return 2;
		}
		return 3;
	};

	$scale.click(event => {
		const level = getLevel(event.pageX - scaleOffset);
		(levels[level])();
	});

	(levels[initialLevel] || levels[0])();
};
