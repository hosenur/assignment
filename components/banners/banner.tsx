import React from 'react'
import Banner01 from './banner-01'
import Banner02 from './banner-02'
import Banner03 from './banner-03'
import Banner04 from './banner-04'
type Props = {
    title: string
    description: string
    image: string
    cta: string
    background: string
    variant: string
}
export default function Banner({ title, description, image, cta, background, variant }: Props) {
    switch (variant) {
        case '01':
            return <Banner01 title={title} description={description} image={image} cta={cta} background={background} />
        case '02':
            return <Banner02 title={title} description={description} image={image} cta={cta} background={background} />
        case '03':
            return <Banner03 title={title} description={description} image={image} cta={cta} background={background} />
        case '04':
            return <Banner04 title={title} description={description} image={image} cta={cta} background={background} />
        default:
            return <Banner01 title={title} description={description} image={image} cta={cta} background={background} />
    }
}
