import { useEffect, useState } from 'preact/hooks'
import React from 'react'
import styled from 'styled-components'
import Service from '../../utils/services'

const Title = styled.h1`
  text-transform: capitalize;
  margin-bottom: 0;
  `
const Description = styled.h4`
  margin-top: 0;
  font-weight: 100;
`

const Ability = ({ ability }) => {

  const [ description, setDescription ] = useState('')

  useEffect(() => {
    Service.getFromUrl(ability.ability.url).then(r => {
      setDescription(r.effect_entries.find(d => d.language.name === 'en').short_effect)
    })
  }, [ability])

  return (
    <div>
      <Title>{ability.ability.name}</Title>
      <Description>{description}</Description>
    </div>
  )
}

export default Ability
