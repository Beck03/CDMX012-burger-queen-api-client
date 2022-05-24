const Waiter = ({logOut}) => {
    return(
        <section className='Home'>
            <h1>WAITER</h1>
            <button onClick={logOut}>Salir</button>
        </section>
    );
}

export default Waiter;