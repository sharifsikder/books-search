
 const allBooks = document.getElementById('all-book');
 const totalBooks = document.getElementById('total-book');
const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // searchField.value = '';

    allBooks.textContent = '';
    totalBooks.textContent = '';
   
    const url = ` http://openlibrary.org/search.json?q=${searchText}`;
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
    totalDiv.innerHTML = `<h3> Total Books : ${counts}</h3>`;
    totalBooks.appendChild(totalDiv);
    console.log(counts)

    const books = data.docs;
    console.log(books)
    books.forEach(book => {
        console.log(book)
       
      
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('book')
        div.innerHTML = `<img src="${book.cover_i}" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">${book.title? book.title:''}</h2>
          <h5 class="card-text">Author Name : ${book.author_name? book.author_name:''}</h5>
          <p class= "card-text">First Published : ${book.first_publish_year? book.first_publish_year: '' }</p>
          <a href="#" class="btn btn-primary">SALE</a>
       `;
       allBooks.appendChild(div)
    })
}