import '../../Sass/RestrictedPages.scss'

const RestrictedPage = ({isLoggedIn, user, Login, Logout}) => {

    return(
        <div>{isLoggedIn ? (
            <div className='container-geral'>
                <h2>Bem vindo, {user} !</h2>
                <button onClick={Logout} className='button-geral'>Sair</button>
            </div>
        ) : (
            <div className='container-geral'>
                <h2>Você não pode acessar essa página</h2>
                <button onClick={Login} className='button-geral'>Entrar</button>
            </div>
        )}
        </div>
    );
}

export default RestrictedPage