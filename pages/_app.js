import '../styles/layout.css'; // Importa el CSS global
import MainLayout from '../layout/MainLayout';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
