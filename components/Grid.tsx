import React from 'react'
import { BentoGrid, BentoGridItem } from './UI/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                    className={className}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid