import '../styles/layout.css'; // Importa el CSS global
import MainLayout from '../layout/MainLayout';
import { WalletProvider } from '../pages/context/WalletContext'; // Importamos el contexto de la wallet

function MyApp({ Component, pageProps }) {
  return (
    <WalletProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </WalletProvider>
  );
}

export default MyApp;
