import React from 'react'
import CharacterItem from './CharacterItem'
import LoadingIcon from '../ui/LoadingIcon'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <LoadingIcon />
  ) : (
      <section className='cards'>
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
    )
}

export default CharacterGrid
