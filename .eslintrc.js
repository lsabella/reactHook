module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
    ecmaFeatures: {
        legacyDecorators: true,
        experimentalObjectRestSpread: true,
    },
    },
    "extends": [ "airbnb" ],
    "globals": {
        axios:false
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true,
    },
    "rules": {
        'no-script-url': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
        'react/jsx-wrap-multilines': 0,
        'react/prop-types': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-one-expression-per-line': 0,
        'import/no-unresolved': [2, { ignore: ['^@'] }],
        'import/no-extraneous-dependencies': [2, { optionalDependencies: true }],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'linebreak-style': 0,
        'react/destructuring-assignment': false,
        'import/no-extraneous-dependencies': false,
        'import/extensions':false,
        "prefer-destructuring": ["error", {"object": false, "array": false}]
    }
}