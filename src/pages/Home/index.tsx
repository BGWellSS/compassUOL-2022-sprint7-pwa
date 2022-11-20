import React from 'react';
import Header from '../../components/Header';
import Message from '../../components/Message';
import * as Styled from './styles';

function Home() {
  return (
    <Styled.Home>
      <Header />
      <main className='content'>
        <Message
          message='We are currently experiencing local customs clearance delays. For the latest updates, please check your order status'
          link='404.html'
        />
      </main>
    </Styled.Home>
  );
}
export default Home;
