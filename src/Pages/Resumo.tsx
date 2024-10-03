import React from 'react'
import { useData } from '../Context/DataContext';

const Resumo = () =>
{
  const { data } = useData();
  return (
    <section className='resumo'>
      RESUMO
    </section>
  )
}

export default Resumo
