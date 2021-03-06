<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>React JS</title>
</head>

<body>
    <div id="app"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

    <script type="text/babel">
        var HelloComponent = React.createClass({
            render: function() {
                return (
                    <h1>Hello, World!</h1>
                )
            }
        })

        ReactDOM.render(<HelloComponent />, document.querySelector('#app'))

    </script>

</body>
</html>
