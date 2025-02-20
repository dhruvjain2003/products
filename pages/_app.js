import "../styles/globals.css";
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../css/footer.css';
import '../css/header.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main style={{ padding: "20px", minHeight: "80vh" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
  