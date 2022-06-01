module.exports = function (plop) {
	// create your generators here
	plop.setGenerator('component', {
		description: 'a new component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component Name',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'src/components/{{name}}',
				base: `./.templates/component`,
				templateFiles: `./.templates/component/*.hbs`,
			},
		],
	});
};
