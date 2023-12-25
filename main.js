const root = ReactDOM.createRoot(document.querySelector('#root'));

// const content = (
//     <div>
//         <h1>Today : {(new Date()).toDateString()}</h1>
//     </div>
// )
function Counter() {
    return (
        <div className="counter">
            <button class="btn">+</button>
            <h2>{0}</h2>
            <button class="btn">-</button>
            <button class="btn"> C</button>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Today : {(new Date()).toDateString()}</h1>
            <h2 class="text-sum">Sum = 0</h2>
            <button class="btn-add">add counter</button>
            <Counter />
        </div>
    );
}

root.render(<App />);