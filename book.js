// id call //
 const allBooks = document.getElementById('all-book');
 const totalBooks = document.getElementById('total-book');
 const spinner = document.getElementById('spinner');
 const error = document.getElementById('error');
 error.style.display = 'none';
 spinner.style.display = 'none';

//search button click//
const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    allBooks.textContent = '';
    totalBooks.textContent = '';

// Error Handle //
   if(searchText === ''){
    error.style.display = 'block';
    totalBooks.style.display = 'none';
    spinner.style.display = 'none';
   }
   else{
    error.style.display = 'none';
    totalBooks.style.display = 'block';
    spinner.style.display = 'block';
   }
 // Error Handale //

 // Api url call //
    const url = ` https://openlibrary.org/search.json?q=${searchText}`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data))   
}

// Total result found show //
const displayBook = (data) => { 

    spinner.style.display = 'none';
    const count = data.numFound;
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3 class="totals"> Total Results Found : ${count}</h3>`;
    totalBooks.appendChild(totalDiv);
        
    // All books show//
 const books = data.docs;
 books.forEach(book => {

    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('book');
    div.innerHTML = `<img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top book-image" alt="...">
    <div class="card-body">
    <h5 class="card-title title"> Book Name : ${book.title? book.title:''}</h5>
    <h5 class="card-text athur"> Author : ${book.author_name? book.author_name:''}</h5>
    <p class="card-text publisher">Publisher : ${book.publisher? book.publisher:''}</p>
    <p class= "card-text publish">First Published : ${book.first_publish_year? book.first_publish_year: '' }</p>
    <a href="#" class="btn btn-danger">Details >></a>`;

 allBooks.appendChild(div)
    })
}
