import { useState, useEffect } from 'react';
import './global/style/style.css';
import { Layout } from '../layout/Layout';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { Footer } from '../components/Footer/Footer';
import { Card } from '../components/Card/Card';
import { Input } from '../components/UI/Input'


function App() {
  const URL = 'https://emoji.ymatuhin.workers.dev/';

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(()=> {
    fetch(URL).
      then((resp)=>resp.json()).
      then((data)=>{
        data.map((el)=>{
          el.keywords = [...new Set (el.keywords.split(' '))].join(' ')
        });
        setData(data)
      });
  },[]);

  const changeInput = (e) =>setInputValue(e.target.value);

  return (
    <>
      <Layout>
        <Header>
          <Input value={inputValue} changeInput={changeInput}/>
        </Header>
        <Main>

          {data.filter(({title, keywords})=>
            (title.toLowerCase()).includes(inputValue.toLowerCase().trim()) ||
            (keywords.toLowerCase()).includes(inputValue.toLowerCase().trim()))
            .map(({symbol, title, keywords}, index)=>
            <Card  key={index} symbol={symbol} title={title} keywords={keywords}/>)}

        </Main>
        <Footer/>
      </Layout>
    </>
  )
}

export default App;
