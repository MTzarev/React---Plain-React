var rootElement = document.getElementById('root');

var reactElement = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            'Hello JSX Modified!'
        ),
        React.createElement(
            'h2',
            null,
            'The best freamwork in the world!'
        ),
        React.createElement(
            'p',
            null,
            ' New Text Area: Here '
        ),
        React.createElement(
            'button',
            null,
            'Clich me!'
        )
    ),
    React.createElement(
        'footer',
        null,
        ' All rights reserverd \xA9 '
    )
);
ReactDOM.render(reactElement, rootElement);