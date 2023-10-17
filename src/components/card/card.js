import React , {useState , useContext , createContext} from 'react'

import { Container
        ,Group
        ,Title
        ,ItemsRow
        ,Row
        ,Item
        ,Picture
        ,Data
        ,DataTitle
        ,Text
        ,Features
        ,FeaturePic
        ,FeatureData
        ,FeatureTitle
        ,FeatureText
        ,Maturity
        ,Meta
        ,Type
        ,Close
} from './styls/style'

const FeatureContext = createContext()

export default function Card({children,...restProps}) {
    const[item,setItem] = useState({})
    const[showFeature,setShowFeature] = useState(false)
  return (
        <FeatureContext.Provider value={{item,setItem,showFeature,setShowFeature}}>
            <Container {...restProps}>
                {children}
            </Container>
        </FeatureContext.Provider>
  )
}

Card.Group = function CardGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Card.ItemsRow = function CardItemsRow({children,...restProps}){
    return <ItemsRow {...restProps}>{children}</ItemsRow>
}

Card.Row = function CardRow({children,...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Card.Item = function CardItem({children,item,...restProps}){
    const {setItem,setShowFeature} = useContext(FeatureContext)
    return <Item {...restProps}
            onClick={() => {
                setItem(item)
                setShowFeature(true)
            }}
    >{children}</Item>
}

Card.Picture = function CardPic({...restProps}){
    return <Picture {...restProps} />
}

Card.Data = function CardData({children,...restProps}){
    return <Data {...restProps}>{children}</Data>
}

Card.DataTitle = function CardDataTitle({children,...restProps}){
    return <DataTitle {...restProps}>{children}</DataTitle>
}

Card.Text = function CardText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Card.Features = function CardFeatures({children,category,...restProps}){
    const {showFeature,setShowFeature,item} = useContext(FeatureContext)
    return showFeature ?
     <Features {...restProps}>

        <FeaturePic src={`/images/${category}/${item.genre}/${item.slug}/large.jpg`} />

        <FeatureData>
            <FeatureTitle>{item.title}</FeatureTitle>
            <FeatureText>{item.description}</FeatureText>

            <Maturity>
                <Meta range={item.maturity}>{(item.maturity) < 12 ? 'pg' :item.maturity}</Meta>
                <Type>{item.genre}</Type>
            </Maturity>

            <Close onClick={()=> setShowFeature(false)}>
                <img src='/images/icons/close.png' alt='close-btn' />
            </Close>
        </FeatureData>

        {children}

     </Features>
     :null
}