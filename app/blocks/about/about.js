import $ from 'jquery';

export default () => {
	const COLUMNS = 43;
	const $textarea = $('.about__textarea');

	const count = () => {
		const text = $textarea.val();
		let linecount = 1;
		text.split('\n').forEach(s => {
			linecount += Math.floor(s.length / COLUMNS) + 1;
		});
		return linecount;
	};

	$textarea.keyup(() => {
		$textarea.attr('rows', count());
	});
	$textarea.attr('rows', count());
};
