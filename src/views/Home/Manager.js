const Manager = ({logOut}) => {
    return(
        <section className='Home'>
            <h1>MANAGER</h1>
            <button onClick={logOut}>Salir</button>
        </section>
    );
}

export default Manager;