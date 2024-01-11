import { useState } from "react";

//example of UseSate****
function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>YouClicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
export default Example;