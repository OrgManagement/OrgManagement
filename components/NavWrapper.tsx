import Link from 'next/link';
import { FC } from 'react';

const NavWrapper: FC = ({ children }) => {
  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Account Manager', path: '/accounts' },
    { name: 'Integrations', path: '/integrations' },
    { name: 'Knowledge Base', path: '/wiki' }
  ];

  const container_classes = 'mx-4 xl:container xl:mx-auto';

  return (
    <>
      <header className='text-4xl bg-stone-800 w-full py-2 text-text-light'>
        <section id='header_content' className={`${container_classes}`}>
          <h1>Org Management</h1>
        </section>
      </header>

      <main className={`${container_classes} flex flex-row rounded-lg bg-stone-800 mt-4`}>
        <nav className='w-1/5 p-4 border-r border-rose-800 space-y-2 text-text-light'>
          <h2 className='text-2xl'>Navigation</h2>
          <ul className='space-y-2'>
            {routes.map((elem, idx) => <Link key={idx} href={elem.path} passHref><li className='bg-rose-800 rounded-lg p-2 cursor-pointer text-lg'>{elem.name}</li></Link>)}
          </ul>
        </nav>

        <section id='page_content' className='w-full'>
          {children}
        </section>
      </main>
    </>
  )
}

export default NavWrapper ;
