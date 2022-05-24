const Chef = ({logOut}) => {
    return(
        <section className='Home'>
            <h1>CHEF</h1>
            <button onClick={logOut}>Salir</button>
        </section>
    );
}

export default Chef;