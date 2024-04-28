import { FaChevronRight,  FaChevronDown, FaChevronLeft, FaQuoteRight } from "react-icons/fa"
import people from "./data"
import { useState } from "react"

const Review = () => {

    const [index, setIndex] = useState(0)
    const {name, job, image, text} = people[index]

  return (
    <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
                <FaQuoteRight />
            </span>
        </div>
    </article>
  )
}
export default Review