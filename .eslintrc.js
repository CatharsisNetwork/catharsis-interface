module.exports = {
	// parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	// extends: [
	// 	// 'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
	// 	// 'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
	//     'prettier'
	// ],
	// parserOptions: {
	// 	ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
	// 	sourceType: 'module', // Allows for the use of imports
	// 	ecmaFeatures: {
	// 		jsx: true, // Allows for the parsing of JSX
	// 	},
	// },
	// rules: {
	//     "jsx-quotes": [
	//         1,
	//         "prefer-double"
	//     ],
	//     // "no-unused-vars": ['warn']
	// },
	// plugins: [
	//     "prettier"
	// ],
	// settings: {
	// 	react: {
	// 		version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
	// 	},
	// },

	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:jest/recommended',
	],
	plugins: ['react-hooks', 'jest'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		'jest/expect-expect': 0,
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
			},
		],
		// "no-restricted-syntax": [
		// 	"error",
		// 	{
		// 		"selector": "ExportDefaultDeclaration",
		// 		"message": "Restricted default export, prefer named exports!"
		// 	}
		// ],
		'no-console': [
			'warn',
			{
				allow: ['warn'],
			},
		],
		'@typescript-eslint/no-empty-interface': [
			'warn',
			{
				allowSingleExtends: true,
			},
		],
		"prefer-const": ["warn", {
			"destructuring": "any",
			"ignoreReadBeforeAssign": false
		}],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 'warn',
		'@typescript-eslint/no-var-requires': 0,
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'react/display-name': 0,
	},
	parserOptions: {
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2018,
	},
	overrides: [
		{
			files: ['webpack.config.js'],
			rules: {
				'@typescript-eslint/no-var-requires': ['off'],
			},
		},
		{
			files: ['*.stories.tsx'],
			rules: {
				'no-restricted-syntax': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
		{
			files: ['*.test.tsx', '*.test.ts'],
			rules: {
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
	],
};
