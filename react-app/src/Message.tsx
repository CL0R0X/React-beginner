//PascalCasing
function Message(){
    //return <h1> Hello World</h1>
    //babeljs.io code conversion JSX to js
    const name = 'Mash';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello world</h1>;
}

export default Message;