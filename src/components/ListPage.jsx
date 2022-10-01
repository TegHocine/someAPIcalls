import React from 'react'
import Spinner from '../components/spinner'
import { useGetAccessPageQuery } from '../redux/services/facebookApi'

const ListPage = ({ token, id }) => {
  const {
    data: res,
    isLoading,
    error
  } = useGetAccessPageQuery({
    id,
    token
  })

  const compareStrings = (item1, item2) => {
    return item1.name < item2.name ? -1 : item1.name > item2.name ? 1 : 0
  }
  const sortedPageList = res?.data?.slice().sort(compareStrings) || []

  if (isLoading) return <Spinner />
  return (
    <>
      <h2 className='text-lg font-semibold'>List pages:</h2>
      <ul className='flex flex-col items-center gap-3'>
        {sortedPageList.length < 1 ? (
          <li className='py-1 w-full px-2'>
            <h2 className=' text-lg'>No pages found</h2>
          </li>
        ) : (
          sortedPageList?.map((item) => (
            <ListPageItem key={item.id} {...item} />
          ))
        )}
      </ul>
    </>
  )
}

const ListPageItem = ({ category, name, id }) => {
  return (
    <li
      key={id}
      className=' py-1 w-full px-2 drop-shadow-md bg-white rounded-md'>
      <h2 className='font-semibold text-lg'>{name}</h2>
      <p className='text-gray-500'>{category}</p>
    </li>
  )
}

export default ListPage
