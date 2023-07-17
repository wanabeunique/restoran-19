document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion__item');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const item = e.target.closest('.accordion__item');
			const preview = item.querySelector('.accordion__preview')
			const content = item.querySelector('.accordion__content');
      const ico = item.querySelector('.accordion__ico')

			item.classList.toggle('accordion--open');
			content.classList.toggle('accordion__content--active')
			ico.classList.toggle('accordion__ico--active')
		});
	});
});