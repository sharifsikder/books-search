
 const allBooks = document.getElementById('all-book');
 const totalBooks = document.getElementById('total-book');
const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // searchField.value = '';

    allBooks.textContent = '';
    totalBooks.textContent = '';
   
    const url = ` https://openlibrary.org/search.json?q=${searchText}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data))
    
    
}

const displayBook = (data) => {
    console.log(data)
    const count = data.docs;
    const counts = count.length;
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3 class="totals"> Total Books : ${counts}</h3>`;
    totalBooks.appendChild(totalDiv);
    
    

    const books = data.docs;
    console.log(books)
    books.forEach(book => {
        console.log(book)
       
      
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('book')
        div.innerHTML = `<img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top book-image" alt="...">
        <div class="card-body">
          <h3 class="card-title title">${book.title? book.title:''}</h3>
          <h5 class="card-text athur">Author Name : ${book.author_name? book.author_name:''}</h5>
          <p class= "card-text publish">First Published : ${book.first_publish_year? book.first_publish_year: '' }</p>
          <a href="#" class="btn btn-danger">SALE</a>
       `;
       allBooks.appendChild(div)
    })
}