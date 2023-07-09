import './App.css'
import data from './assets/etsy.json'
import  Listing  from './components/Listing.tsx'
import type { ListingItem } from './components/Listing'
import type { MainImage } from './components/MainImage'

function App() {
  const items = data.map(item => ({
    listing_id : item.listing_id,
    url : item.url,
    MainImage : ({
      url_570xN : item.MainImage?.url_570xN
    } as MainImage),
    title : item.title,
    currency_code : item.currency_code,
    price : item.price,
    quantity : item.quantity
    } as ListingItem));

  return (
    <>
      <Listing items={items}/>
    </>
  )
}

export default App
