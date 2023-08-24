import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Table from './table';
import Analitic from './analitic';
import Home from './home';
import Login from './login';
import RegistrationList from './cadList';
import FormCadastro from './newUser';

function MyApp({ Component, pageProps }: AppProps) {
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storage = window.localStorage.getItem('mylist@token');
    const estaAutenticado = storage !== null;
    setAutenticado(estaAutenticado);
    setLoading(false);
  }, []);

  const router = useRouter();


  if (loading) {
    return <div>Carregando...</div>;
  }

  // if (!autenticado && router.pathname !== '/') {
  //   return <Login/>
  // }

  if (Component === FormCadastro) {
    return <FormCadastro />;
  } else if (Component === Home) {
    return <Home />;
  } else if (Component === Table) {
    return <Table />;
  } else if (Component === Analitic) {
    return <Analitic />;
  } else if (Component === RegistrationList) {
    return <RegistrationList />;
    
  } if (!autenticado && router.pathname !== '/') {
    return <Login/>;
    
  } else {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
