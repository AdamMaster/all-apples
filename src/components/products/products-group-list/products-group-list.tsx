import s from './styles.module.css'
import { ProductWithRelations } from '../product-card/types/types'
import { Heading } from '@/components/ui'
import { ProductCard } from '../product-card/product-card'

interface Props {
  title?: string
  products: ProductWithRelations[]
  categoryId: number
  className?: string
  listClassName?: string
}

export const ProductsGroupList: React.FC<Props> = ({ title, products, className }) => {
  return (
    <div className={`${s.wrapper} ${className ? className : ''}`} id={title}>
      {/* <Heading className={s.title} level='h2'>
        Яблоки
      </Heading> */}
      <div className={s.list}>
        {products.map(product => (
          <ProductCard
            id={product.id}
            category={product.category?.name}
            name={product.name}
            type={product.type?.name}
            imageUrl={product.imageUrl}
            price={100}
            sort={1}
            ripeningPeriod={product.ripeningPeriod}
            tastingEvaluation={product.tastingEvaluation}
            description={product.description}
            key={product.id}
          />
        ))}
      </div>
    </div>
  )
}
