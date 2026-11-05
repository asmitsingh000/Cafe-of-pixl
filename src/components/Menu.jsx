import { menu } from '../data/Data';
const Menu = ({ className }) => {
    return (
        <div className="section">
            <div className={className}>
                <div className="grids">
                    {menu.map((item, i) => (
                        <div className='cards' key={item.id} style={{'--i':i}}>
                            <img src={item.image} alt={item.name} />
                            <div className="cards-body">
                                <div className="cards-head">
                                    <h3 className='name'>{item.name}</h3>
                                    <span className='type'>{item.type}</span>
                                    <p className='paisa'>{item.price}/-</p>
                                </div>
                                <button className='cursor-pointer border p-0 m-0 rounded-sm w-23'>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
// see there is a triangle how those div are aligned hahahahahah
    )
}

export default Menu