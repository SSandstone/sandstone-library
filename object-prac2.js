
const bookForm=document.getElementById('addForm');
const addBookBtn=document.getElementById('addBtn');
const submitBookBtn=document.getElementById('submitBook');

let myLibrary=[];
let index=0;

function Book(title, author, pages, read, marker){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.marker=marker;
};


function addBookToLibrary(){

    const book=new Book(
        document.getElementById('title').value, 
        document.getElementById('author').value, 
        document.getElementById('pages').value, 
        document.getElementById('read').value,
        index
    );

    myLibrary.push(book);
    console.log(myLibrary);

    const library=document.getElementById('library');
    const genre=document.getElementById('genre');

    const div=document.createElement('div');
    const rmBtn=document.createElement('button');
    const readBtn=document.createElement('button');
    const title=document.createElement('p');
    const author=document.createElement('p');
    const pages=document.createElement('p');
    const read=document.createElement('p');
    const genreChoice=document.createElement('p');

    div.classList.add('book');

    title.textContent=book.title;
    author.textContent=`by ${book.author}`;
    pages.textContent=`${book.pages} pages`;
    genreChoice.textContent=genre.value;
    console.log(book.read);


    title.classList.add('title');
    author.classList.add('author');
    pages.classList.add('pages');
    read.classList.add('read');
    genreChoice.classList.add(`${genre.value}`);

    rmBtn.textContent='Remove';
    rmBtn.classList.add('remove-book', `book${index}`);
    rmBtn.addEventListener('click', ()=>{
        library.removeChild(div);
        const finder=myLibrary.indexOf(book.title);
        myLibrary.splice(finder,1);
    });

    if(book.read==='Read'){
        read.textContent='Read';
        readBtn.textContent='Not Read'
        readBtn.classList.toggle('read');
        book.read='Read';
    } else {
        read.textContent='Not Read';
        book.read='Not Read';
        readBtn.textContent='Read'
        readBtn.classList.toggle('not-read');
    };

    readBtn.addEventListener('click',()=>{
        if(read.textContent==='Read'){
            read.textContent='Not Read';
            book.read='Not Read';
            readBtn.textContent='Read';
            readBtn.classList.toggle('read');
            readBtn.classList.toggle('not-read');
        } else {
            read.textContent='Read';
            book.read='Not Read';
            readBtn.textContent='Not Read'
            readBtn.classList.toggle('read');
            readBtn.classList.toggle('not-read');
        };
    });

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(genreChoice);
    div.appendChild(rmBtn);
    div.appendChild(readBtn);
    library.appendChild(div);

    index++;
};

function clear(){
    document.querySelectorAll('input').forEach(item =>{
        item.value='';
        item.innerHTML='';
        item.checked=false;
    });
}

submitBookBtn.addEventListener('click',()=>{ 
    addBookToLibrary();
    clear();
});