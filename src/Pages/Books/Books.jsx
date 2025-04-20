import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {


  return (
    <div className='py-10'>
      <h1 className='text-4xl font-bold text-center py-4'>Books</h1>
      <Suspense fallback={<span>Loading...</span>} >

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            data.map((sBook => <Book key={sBook.bookId} singleBook={sBook} ></Book>))
          }
        </div>

      </Suspense>
    </div>
  );
};

export default Books;