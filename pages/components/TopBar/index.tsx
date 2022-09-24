import { HomeOutlined, LinkOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import s from './index.module.scss';
const items = [
    {
        label: <HomeOutlined />,
        key: '#'
      },
  {
    label: '文章',
    key: 'article',
    children: [
        {
            label: '找文章',
            key: 'article-find',  
        },
        {
            label: '分类',
            key: 'article-kind',  
        },
        {
            label: '标签',
            key: 'article-tags',  
        }
    ]
  },
  {
    label: '图库',
    key: 'images'
  },
  {
    label: '说说',
    key: 'talks'
  },
  {
    label: '留言',
    key: 'message'
  },
  {
    label: '友链',
    key: 'links'
  },
  {
    label: '作品',
    key: 'productions'
  },
  {
    label: '建站',
    key: 'log'
  },
  {
    label: '关于',
    key: 'about'
  },
];

const TopBar = () => {
  const [current, setCurrent] = useState('mail');
  const router = useRouter();
  const onClick = (e) => {
    router.push('/'+e.key)
    setCurrent(e.key);
  };

  return (
    <div className={s.topBar}>
        <Menu className={s.menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <LinkOutlined className={s.set}/>
    </div>
  );
};

export default TopBar;