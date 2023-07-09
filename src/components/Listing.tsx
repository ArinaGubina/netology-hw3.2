import type { ListingItem } from './Listing'

interface Listing{
 items : ListingItem[]
}

function Listing( props : Listing) {
  const itemList = props.items.map((item, key) => {
    const titleView = (String(item.title).length > 50) ? item.title.substring(0, 50) + "..." : item.title;
    const currencyView = (item.currency_code === "USD") ? "$" : (item.currency_code === "EUR") ? "€" : item.currency_code;
    const lvl = (item.quantity <= 10) ? "low" : (item.quantity > 20) ? "high" : "medium";
    return (
      <div className='item' key={key}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item['MainImage'].url_570xN}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{titleView}</p>
          <p className="item-price">{currencyView} {item.price}</p>
          <p className={`item-quantity level-${lvl}`}>{item.quantity} left</p>
        </div>
      </div>
    )
    });
  return (
    <div className='item-list'>{itemList}
    </div>
  )
}

export default Listing