import React, { useState } from 'react'

const ListAdAccount = ({ adaccounts }) => {
  const [filter, setFilter] = useState('')
  const [filterdAccount, setFilteredAccount] = useState(adaccounts)
  const onFilterChange = (e) => {
    setFilter(e.target.value)
    setFilteredAccount(
      adaccounts.filter(({ name }) =>
        name.toLowerCase().includes(e.target.value)
      )
    )
  }
  return (
    <>
      <h2 className='text-lg font-semibold mb-2 flex justify-between items-center'>
        List :
        <input
          type='text'
          placeholder='Filter by name'
          className='outline-none border-2 border-gray-700 px-2 py-1 rounded-lg text-sm'
          value={filter}
          onChange={onFilterChange}
        />
      </h2>
      <ul className='flex flex-col items-center gap-3'>
        {filterdAccount?.map((item) => (
          <ListAdAccountItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  )
}

const ListAdAccountItem = ({ name }) => {
  return (
    <li className=' py-2 w-full px-2 drop-shadow-md bg-white rounded-md'>
      <h2 className='font-semibold text-lg'>{name}</h2>
    </li>
  )
}

export default ListAdAccount
