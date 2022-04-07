import type { NextPage } from 'next'
import Head from 'next/head'
import { Field, Form, Formik } from 'formik';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login Page</title>
      </Head>
      <main>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}

          onSubmit={() => {

          }}
        >
          <Form>
            <Field id='username' name='username' placeholder='Username' />
            <Field type='password' id='password' name='password' placeholder='Password' />
            <button type='submit'>Login</button>
          </Form>
        </Formik>
      </main>
    </div>
  )
}

export default Home
