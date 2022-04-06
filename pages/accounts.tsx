import { ChangeEvent, FC, useMemo, useState } from 'react';
import type { NextPage } from 'next';
import classNames from 'classnames';
import Fuse from 'fuse.js';
import { Dialog } from '@headlessui/react';
import { Field, Form, Formik } from 'formik';

interface AccountInformation {
  name: string;
  username: string;
  password: string;
  data: {
    url: string;
  } & Record<string, string>;
}

interface AddAccountDialogProps {
  isOpen: boolean;
  closeSelf: () => void;
  addAccount: (arg0: AccountInformation) => void;
}

const AddAccountDialog: FC<AddAccountDialogProps> = ({ isOpen, closeSelf, addAccount }) => {
  const inputFieldClasses = 'p-2 rounded-lg bg-stone-600 text-text-light'

  return (
    <Dialog open={isOpen} onClose={() => closeSelf()} className='bg-stone-800 w-1/3 mx-auto rounded-lg p-8 text-text-light border-4 border-rose-800'>
      <Dialog.Overlay />
      <Dialog.Title className='text-4xl'>Add new account</Dialog.Title>

      <Formik
        initialValues={{
          name: '',
          username: '',
          password: '',
          data: {
            url: ''
          }
        }}
        onSubmit={async (data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          addAccount(data);
          resetForm();
          setSubmitting(false);
          closeSelf();
        }}
      >
        {({ isSubmitting }) =>
          <Form className='space-y-4 mt-4'>
            <div className='grid grid-cols-3 gap-2'>
              <Field className={classNames(inputFieldClasses, 'col-span-2')} as='input' name='name' placeholder='Account Name' />
              <Field className={classNames(inputFieldClasses)} as='input' name='username' placeholder='Username' />
              <Field className={classNames(inputFieldClasses)} as='input' name='password' placeholder='Password' />
              <Field className={classNames(inputFieldClasses, 'col-span-2')} as='input' name='data.url' placeholder='URL' />
            </div>

            <button type='submit' disabled={isSubmitting} className='bg-rose-800 text-text-light p-2 rounded-lg'>Add Account</button>
          </Form>
        }
      </Formik>

    </Dialog>
  );
}

const AccountsPage: NextPage = () => {
  // TODO: Implement data fetching
  const accountData: Array<AccountInformation> = [
    { name: 'Main Google', username: 'club@gmail.com', password: 'jqtf6!Jwyk9h&4FqL4y%FmD4SQ^sjN', data: {
      url: 'https://google.com',
    } },
    { name: 'Secretary Google', username: 'secretary@gmail.com', password: 'password123', data: {
      url: 'https://google.com',
    } },
    { name: 'President Google', username: 'president.club@gmail.com', password: 'password123', data: {
      url: 'https://google.com',
    } },
    { name: 'Instagram', username: 'club@gmail.com', password: 'password123', data: {
      url: 'https://instagram.com',
    } },
    { name: 'PayPal', username: 'club@gmail.com', password: 'password123', data: {
      url: 'https://paypal.com',
    } },
    { name: 'Steam', username: 'club@gmail.com', password: 'password123', data: {
      url: 'https://steampowered.com',
    } },
  ];

  const [searchText, setSearchText] = useState('');
  const [accounts, setAccounts] = useState<Array<AccountInformation>>(accountData);
  const [addAccountOpen, setAddAccountOpen] = useState(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const copyToClipboard = (copyText: string) => {
    navigator.clipboard.writeText(copyText);
  }

  const searchFilter = () => {
    if (searchText === '') {
      return accounts;
    }

    const fuse = new Fuse(accounts, {
      includeScore: true,
      keys: ['name']
    });

    const result = fuse.search(searchText);
    return result.filter(element => element.score! < 0.5).map(element => element.item);
  }

  const displayAccounts = useMemo(() => searchFilter(searchText, accounts), [searchText, accounts]);

  const rowClasses = 'grid grid-cols-4 p-2';
  const rowFieldClasses = 'truncate'

  // TODO: Add buttons to view details and delete? account rows
  return (
    <section className='p-2 text-text-light'>
      <AddAccountDialog isOpen={addAccountOpen} closeSelf={() => setAddAccountOpen(false)} addAccount={(newAccount: AccountInformation) => setAccounts([...accounts, newAccount])}/>
      <div className='flex flex-row justify-between'>
        <h1 className='text-4xl'>Account Manager</h1>
        
        <div className='w-1/3 flex flex-row justify-between'>
          <input type='text' placeholder='Search...' value={searchText} onChange={(e) => {handleSearchChange(e)}} className='rounded-lg py-2 px-4 w-3/4 bg-stone-600 text-text-light' />
          <button className='bg-rose-800 p-2 px-6 rounded-lg' onClick={() => setAddAccountOpen(true)}>Add</button>
        </div>
      </div>

      <div id='account_table' className='flex flex-col p-2 rounded-lg my-4 divide-y divide-rose-200'>
        <div className={classNames(rowClasses, 'font-bold', 'text-rose-600')}>
          <p className={rowFieldClasses}>Account Name</p>
          <p className={rowFieldClasses}>Username</p>
          <p className={rowFieldClasses}>Password</p>
        </div>
        {
          displayAccounts.map((account, idx) =>
            <div className={classNames(rowClasses, { 'bg-rose-800': idx % 2 === 1 })} key={idx}>
              <p className={classNames(rowFieldClasses, 'capitalize', 'font-semibold')}>{account.name}</p>
              <p className={classNames(rowFieldClasses, 'cursor-pointer')} onClick={() => copyToClipboard(account.username)}>{account.username}</p>
              <p className={classNames(rowFieldClasses, 'font-mono', 'cursor-pointer')} onClick={() => copyToClipboard(account.password)}>{account.password}</p>
              <p className={rowFieldClasses}>Buttons will go here</p>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default AccountsPage;
