import { useSelector } from 'react-redux'

import { Tab } from '@headlessui/react'

import ListPage from '../components/ListPage'
import Navbar from '../components/Navbar'
import ListAdAccount from '../components/ListAdAccount'

const sections = ['Liste des pages', 'Poster un message', 'ad account']

const Home = () => {
  const {
    token,
    user: { id, name, picture, adaccounts }
  } = useSelector((state) => state.auth)

  const handleShare = (e) => {
    e.preventDefault()
    const ahref = 'https://github.com/'
    const link = `https://www.facebook.com/dialog/share?app_id=${
      import.meta.env.VITE_APP_ID
    }&href=${ahref}`
    open(link)
  }

  const open = (socialLink) => {
    window.open(socialLink, '_blank')
  }
  return (
    <div>
      <Navbar name={name} picture={picture?.data?.url} />
      <div className=' flex justify-center items-center w-full'>
        <div className='w-full max-w-3xl px-2 py-10 sm:px-0'>
          <Tab.Group>
            <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-2 text-white'>
              {sections.map((section, i) => (
                <Tab
                  key={i}
                  className={({ selected }) =>
                    `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-700
                      ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2 ${
                        selected
                          ? 'bg-white shadow'
                          : 'text-gray-500 hover:bg-white/[0.12] hover:text-white'
                      }`
                  }>
                  {section}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className={'mt-5 bg-white drop-shadow-md rounded-xl'}>
              <Tab.Panel className='rounded-xl p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 '>
                <ListPage token={token} id={id} />
              </Tab.Panel>
              <Tab.Panel className='rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'>
                <button
                  onClick={handleShare}
                  className='py-0.5 px-3 border-2 font-medium border-gray-700 rounded-lg'>
                  share
                </button>
              </Tab.Panel>
              <Tab.Panel className='rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 '>
                <ListAdAccount adaccounts={adaccounts?.data} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

export default Home
