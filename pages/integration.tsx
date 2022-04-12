import classNames from 'classnames';
import type { NextPage } from 'next';
import { FC, useEffect, useState } from 'react';
import CircleIcon from '../components/icons/CircleIcon';
import DiscordIcon from '../components/icons/discordIcon';
import SlackIcon from '../components/icons/SlackIcon';

interface IntergationCardProps {
  type: 'discord' | 'slack';
  title: string;
}

interface ServerDetails {
  members: number;
  membersOnline: number;
}

interface IntergrationDetails {
  servers: ServerDetails[];
}

const IntergationCard: FC<IntergationCardProps> = ({ type, title }) => {
  // TODO: Add data fetching
  const dummyServerDetails: ServerDetails = {
    members: 420,
    membersOnline: 69,
  };
  const [ intergrationDetails, setIntergrationDetails ] = useState<IntergrationDetails>();

  useEffect(() => {
    // Simulate fetching information from the intergration's API
    setTimeout(() => {
      setIntergrationDetails({ servers: [
        { members: 420, membersOnline: 69 },
        { members: 37, membersOnline: 6 },
      ]});
    }, Math.random() * 2000)
  }, [])

  const cardClasses = classNames('w-full rounded-md p-4 cursor-pointer', {
    'bg-indigo-500 text-text-light': type === 'discord',
    'bg-white text-text-dark': type === 'slack'
  });
  const iconClasses = 'text-3xl'

  return (
    <div className={cardClasses}>
      <div className='flex flex-row items-center space-x-4'>
        <CircleIcon className={intergrationDetails !== undefined ? 'text-green-400' : 'text-red-600'}/>
        {
          type === 'discord' ? <DiscordIcon className={iconClasses} /> : <SlackIcon className={iconClasses} />
        }
        <h2 className='text-2xl'>{title}</h2>
        {
        intergrationDetails &&
          <span className='text-lg'>
            {`S: ${intergrationDetails.servers.length} | ${intergrationDetails.servers.map(elem => elem.membersOnline + '/' + elem.members).join(' ')}`}
          </span>
        }
      </div>
    </div>
  )
}

const Intergration: NextPage = () => {
  const intergrations: Array<IntergationCardProps> = [
    { type: 'discord', title: 'Jim Bumbot' },
    { type: 'slack', title: 'Jim Bumbot Sr.' },
  ];
  return (
    <section className='p-2'>
      <section id="cardContainer" className="space-y-2">
      {
        intergrations.map((elem, idx) => <IntergationCard key={idx} {...elem} />)
      }
      </section>
    </section>
  )
}

export default Intergration;
