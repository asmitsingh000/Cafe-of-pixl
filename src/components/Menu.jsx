import { menu } from '../data/Data';
const Menu = () => {
    return (
        <div className="section">
            <div className="grids">
                {menu.map((item) => (
                    <div className='cards'>
                        <img src={item.image} alt={item.name} />
                        <div className="cards-body">
                            <div className="cards-head">
                                <h3 className='name'>{item.name}</h3>
                                <span className='type'>{item.type}</span>
                                <p className='paisa'>{item.price}/-</p>
                            </div>
                            <button>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Menu