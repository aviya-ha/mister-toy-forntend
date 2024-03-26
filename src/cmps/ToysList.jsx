import { Link } from "react-router-dom"
import { ToyPreview } from "./ToyPreview.jsx"



export function ToysList({ toys ,onRemoveToy}) {

    return (
        <ul className="toy-list clean-list">
            {toys.map(toy =>

                <li className="toy-preview" key={toy._id}>
                    <ToyPreview toy={toy} />
                    <div>
                        <button onClick={() => onRemoveToy(toy._id)}>x</button>
                        <Link to={`/toy/edit/${toy._id}`}> <button> Edit </button></Link>
                    </div>

                    <button className="buy">
                        Add to Cart
                    </button>
                </li>

            )

            }
        </ul>
    )
}