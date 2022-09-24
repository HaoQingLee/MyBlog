import TopBar from './components/TopBar/index'
import ArticleList from './components/articleList/index'
import SelfIntrduction from './components/self-introduction/index'
import { ConfigProvider } from 'antd';
import s from './styles/index.module.scss'
export default function indexedDB() {
    return(
        <div className={s.page}>
            <TopBar/>
            <div className={s.content}>
                <ArticleList/>
                <SelfIntrduction/>
            </div>
        </div>
    )
}
ConfigProvider.config({
    theme: {
      primaryColor: 'rgb(10,166,121)',
    },
  });