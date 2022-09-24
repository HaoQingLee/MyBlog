import React from 'react';
import s from './index.module.scss'
import { Image } from 'antd';
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';

interface Author{
    avatar: string,
    say?: string,
    name: string,
    github?: string,
    juejin?: string,
    wechat?: string,
    QQ?: string
}
const SelfIntrduction = (author: Author)=>{
    return(
        <div className={s.page}>
            <div>
                <div className={s.desc}>
                    <Image alt={author.avatar} className={s.avatar}/>
                    <h2>{author.name}</h2>
                    <div>{author.say}</div>
                </div>
                <div className={s.links}>
                    <GithubOutlined />
                    <GithubOutlined />
                    <WechatOutlined />
                    <QqOutlined />
                </div>
            </div>
        </div>
    )
}
export default SelfIntrduction;