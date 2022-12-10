export default function DisplayList({ Data }) {

  return (
    <ul>
      {Data.map((stuff) => (
        <li key={stuff.id} className="my-10">
           {stuff.text} <br/>
           {stuff.name}
           </li>
      ))}
    </ul>
  )
}