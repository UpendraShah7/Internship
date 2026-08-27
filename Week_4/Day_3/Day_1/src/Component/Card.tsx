interface Carddd{
    name:String;
    price: number;
    isTrue :boolean;
}

export function Cardd({name , price ,isTrue}:Carddd) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <h3>{isTrue.toString()}</h3>
    </div>
  )
}

export default Cardd
