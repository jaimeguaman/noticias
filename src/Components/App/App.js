import React from 'react'
import Signal from '../Signal/Signal'
import Clock from '../Clock/Clock'
import Follow from '../Follow/Follow'
import CountDown from '../CountDown/CountDown'
import { Helmet } from 'react-helmet'
import Feed from '../Feed/Feed'

class App extends React.Component {
  constructor () {
    super()
    this.signals = [{
      title: '24 Horas TVN',
      src: 'https://www.youtube.com/embed/g4599q5uxnM?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0'
    }, {
      title: 'T13',
      src: 'https://www.youtube.com/embed/bOvhCYr1NYk?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0'
    }, {
      title: 'Meganoticias',
      src: 'https://www.youtube.com/embed/mvjj_ZEw384?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0'
    }, {
      title: 'CHV',
      src: 'https://mdstrm.com/live-stream/5c6c302a414cc5496c9d7d79?jsapi=true&autoplay=true&volume=0'
    }, {
      title: 'CNN Chile',
      src: 'https://www.youtube.com/embed/y5vvZ5gbF10?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0'
    }]
    this.feeds = [
      'https://rss.app/feeds/G7T7btEZ3kaIHrfj.xml',
      'https://rss.app/feeds/cB5YJOsFis7lh7yb.xml',
      'https://rss.app/feeds/PuWTsqczRrybKiWS.xml',
      'https://rss.app/feeds/0uf5l2IhtBF9Qag8.xml',
      'https://rss.app/feeds/o528mkszQo5rfGkv.xml',
      'https://www.cooperativa.cl/noticias/site/tax/port/all/rss_3___1.xml'
    ]
  }

  render () {
    return (
      <div className="container-fluid h-100">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Informativo Chileno</title>
          <meta name="description" content="Informate de todas las señales de tv nacionales y de las noticias minuto a minuto" />
          <link rel="canonical" href="http://madkoding.com/tv" />
        </Helmet>
        <div className="row h-100">
          <Clock />
          <Follow />
          <CountDown title={'Marcha Martes 29'} date={'Oct 29, 2019 17:30:00'} finish={'00 : 00 : 00'} />
          {this.signals.map((signal, index) => <Signal key={index} title={signal.title} src={signal.src} />)}
          {this.feeds.map((feed, index) => <Feed key={index} url={feed} />)}
        </div>
      </div>
    )
  }
}

export default App
