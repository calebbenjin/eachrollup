import Layout from '@/components/Layout'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div>
        <h1>404</h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href='/'>Go Back Home</Link>
      </div>
    </Layout>
  )
}
