import './App.css'
import bookData from './book-data.json'
import React, { useState } from 'react'

// defines a functional component named 'App'. main component of your application
function App() {
  // declares a state variable showMore andinitializes it with false. used to ddetermine to show or hide additional book info
  const [showMore, setShowMore] = useState(false);
  // declares a state variable 'activeBook' and initializes it with null, keep tracks of which books information is currently active
  const [activeBook, setActiveBook] = useState(null);
  //  this lgs the value of the 'activeBook' state variabl to the console for debugging
  console.log("activeBook", activeBook);
  // marks start of code to be rendered by this component
  return (
    // map through the data for the display and create a variable for each thing
<div>
      {/* heading element */}
      <h1>Freeshelf</h1>
      {/* maps over 'bookData' array using 'map' function to render book related content for each item in the array. 'book' parameter represents each book object, and 'index' is the index of the current book in the array.  */}
      {bookData.map((book, index) => (
        // key attribute set to 'index'. used as identifier for each book item when rendering a list
        <div key={index}>
          {/* represents basic book info(title,author,img) */}
          <Book
            bookTitle={book.title}
            bookAuthor={book.author}
            bookImg={book.coverImageUrl}
          />
          {/* button element with 'onClick' event. when clicked, calls provided function that toggles 'activeBook' and 'showMore' state variables */}
          <button
            onClick={() => {
              setActiveBook(index);
              setShowMore(!showMore);
            }}
          >
            More Information
          </button>
          {/* conditional rendering block. checks if 'activeBook' is same as the current index, and if 'showMore' is true. if both conditions are met, renders additional book information */}
          {activeBook === index && showMore && (
            <>
            {/* div elements display additional book info, conditionally rendered when "More information" button is clicked */}
              <div>URL: {book.url}</div>
              <div>Publisher: {book.publisher}</div>
              <div>Publication Date: {book.publicationDate}</div>
              <div>Description: {book.detailedDescription}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
// defines a functional component named 'Book' and recieves the props inside parens.
const Book = ({ bookTitle, bookAuthor, bookImg }) => {
  return (
    <div>
      {/* renders book's title as a paragraph element */}
      <h2>{bookTitle}</h2>
      {/* renders author as paragraph */}
      <p>{bookAuthor}</p>
      {/* renders book's cover image */}
      <img src={bookImg}></img>
    </div>
  );
};

export default App;









