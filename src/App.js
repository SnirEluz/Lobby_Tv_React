import './App.css';
import BannerOne from './comp/Banners/BannerOne';
import BannerTwo from './comp/Banners/BannerTwo';
import Header from './comp/Header/Header';
import News from './comp/News/News';
import NewsBanner from './comp/News/NewsBanner';
import Alert from './comp/OwnerMsg/Alert';
import Shabbat from './comp/Shabbat/Shabbat';
import Weather from './comp/Weather/Weather';

function App() {
  return (
    <div className="App" dir="rtl">
      <Header />
      <div className="Main">
        <Alert />
        <BannerOne />
        <div className="left">
          <Weather />
          <NewsBanner />
          {/* <Shabbat /> */}
          {/* <BannerTwo /> */}
        </div>
      </div>
      <News />
    </div>
  );
}

export default App;
