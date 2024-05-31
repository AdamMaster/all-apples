import { About } from '@/components/organisms/about'
import s from './styles.module.css'
import { Catalog } from '@/components/organisms/catalog'
import { Delivery } from '@/components/organisms/delivery'
import { Promo } from '@/components/organisms/promo'
import { Popular } from '@/components/organisms/popular'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({})
}

export const HomePage = ({ contacts }: any) => {
  console.log(contacts)

  return (
    <div className={s.wrapper}>
      <Promo className={s.promo} />
      <Popular />
      <Catalog className={s.catalog} />
      <About className={s.about} />
      <Delivery className={s.delivery} />
    </div>
  )
}
