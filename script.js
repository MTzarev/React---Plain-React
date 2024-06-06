let rootElement = document.getElementById('root');

let reactElement = (
    <div>
        <header>
            <h1>Hello JSX Modified!</h1>
            <h2>The best freamwork in the world!</h2>

            <p> New Text Area: Here </p>

            <button>Clich me!</button>
            
        </header>

        <footer> All rights reserverd &copy; </footer>
    </div>

);
ReactDOM.render(reactElement, rootElement)