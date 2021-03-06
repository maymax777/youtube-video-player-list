import React from 'react'
import { AutoComplete } from 'antd'
import { useDebouncedCallback } from 'use-debounce'
import { DEBOUNCE_TIME_LIMIT } from '../../../utils/config'
import style from './style.module.scss'

/**
 * Get keyword from searchbox
 * @param {Function} updateKeyword 
 */
function SearchBox({ updateKeyword }) {
  const debounced = useDebouncedCallback(value => {updateKeyword(value)}, DEBOUNCE_TIME_LIMIT);

  return (
    <div className={style.container}>
      <AutoComplete 
        placeholder="Type keyword..."
        style={{width:300}}
        onSearch={value => debounced.callback(value)}
      />
    </div>
  )
}

export default SearchBox
