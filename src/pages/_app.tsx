import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';
import styles from '../styles/app.module.scss';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {


  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp

//yarn add typescript @types/react @types/node -D
//yarn add sass
//yarn add date-fns
//yarn add json-server -D
//yarn add axios
//yarn add rc-slider
//PWA
//Omni