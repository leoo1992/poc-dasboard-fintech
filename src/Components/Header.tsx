import React from 'react'
import { useData } from '../Context/DataContext'
import DateRange from './DateRange';

const Header = () =>
{
  const { data } = useData();

  if (!data) return null;
  return (
    <div>
      HEADER
      <DateRange/>
    </div>
  )
}

export default Header
