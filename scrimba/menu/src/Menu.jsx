import Pizza from './Pizza'

function Menu (){
    return(
    <div className='menu'>
        <h2>Our Menu</h2>
        <Pizza img='pizzas/spinaci.jpg' title='spinachi'ingredients='Tomato, mozarella, spinach, and ricotta cheese' price={10}/>

       <Pizza title='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion'  img='pizzas/funghi.jpg' price={12} />

       <Pizza title='Pizza Margherita' ingredients="Tomato and mozarella"  img="pizzas/margherita.jpg" price={10} />

       <Pizza title='Focaccia' ingredients="Bread with italian olive oil and rosemary"  img="pizzas/focaccia.jpg" price={6} />

       <Pizza title='Pizza Salamino' ingredients="Tomato, mozarella, and pepperoni"  img="pizzas/salamino.jpg" price={15} />

       <Pizza title="Pizza Prosciutto" ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"  img="pizzas/prosciutto.jpg" price={18} />


    </div>
    )
}
export default Menu;