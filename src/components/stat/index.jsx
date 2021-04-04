import React from 'react'
import styled, { keyframes } from 'styled-components'

const Total = styled.div`
  height: 20px;
  border-radius: 5px;
  background-color: #f26419;
  overflow: hidden;
`

const fade = (size) => keyframes`
  0% { 
    width: 0;
  }
  100% { 
    width: ${size}%;
  }
`
const Value = styled.div`
  height: 100%;
  width: 0;
  background-color: #86bbd8;
  transition: .2s;
  border-radius: 5px;
  text-align: center;
  color: #353535;

  animation-delay: .2s;
  animation-name: ${p => fade(p.value)};
  animation-duration: 1s;
  animation-iteration-count: initial;
  animation-fill-mode: forwards;
`

const StatName = styled.h4`
  text-transform: capitalize;
  font-weight: 100;
  margin-bottom: 5px;
`

const Stat = ({ stat }) => {

  return (
    <div>
      <StatName>{stat.stat.name}</StatName>
      <Total>
        <Value 
          value={stat.base_stat}
        >
          {stat.base_stat}
        </Value>
      </Total>
    </div>
  )
}

export default Stat
