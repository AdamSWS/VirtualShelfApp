    const books = [
        { id: 'book-01', title: 'Charlie and the Chocolate Factory', author: 'Roald Dahl', genre: 'Fantasy', pages: 196 },
        { id: 'book-02', title: 'Matilda', author: 'Roald Dahl', genre: 'Fantasy', pages: 240 },
        { id: 'book-03', title: 'The BFG', author: 'Roald Dahl', genre: 'Fantasy', pages: 224 },
        { id: 'book-04', title: 'James and the Giant Peach', author: 'Roald Dahl', genre: 'Fantasy', pages: 160 },
        { id: 'book-05', title: 'Fantastic Mr Fox', author: 'Roald Dahl', genre: 'Children\'s fiction', pages: 96 },
        { id: 'book-06', title: 'The Witches', author: 'Roald Dahl', genre: 'Fantasy', pages: 208 },
        { id: 'book-07', title: 'The Twits', author: 'Roald Dahl', genre: 'Children\'s fiction', pages: 96 },
        { id: 'book-08', title: 'George\'s Marvellous Medicine', author: 'Roald Dahl', genre: 'Fantasy', pages: 96 },
        { id: 'book-09', title: 'Danny, the Champion of the World', author: 'Roald Dahl', genre: 'Fiction', pages: 224 },
        { id: 'book-10', title: 'The Giraffe and the Pelly and Me', author: 'Roald Dahl', genre: 'Children\'s fiction', pages: 80 },
        { id: 'book-11', title: 'Esio Trot', author: 'Roald Dahl', genre: 'Children\'s fiction', pages: 64 },
        { id: 'book-12', title: 'Boy: Tales of Childhood', author: 'Roald Dahl', genre: 'Autobiography', pages: 176 },
        { id: 'book-13', title: 'Going Solo', author: 'Roald Dahl', genre: 'Autobiography', pages: 224 },
        { id: 'book-14', title: 'The Magic Finger', author: 'Roald Dahl', genre: 'Fantasy', pages: 64 },
        { id: 'book-15', title: 'The Enormous Crocodile', author: 'Roald Dahl', genre: 'Children\'s fiction', pages: 64 },
        { id: 'book-16', title: 'Revolting Rhymes', author: 'Roald Dahl', genre: 'Poetry', pages: 48 },
        { id: 'book-17', title: 'Dirty Beasts', author: 'Roald Dahl', genre: 'Poetry', pages: 32 },
        { id: 'book-18', title: 'The Vicar of Nibbleswicke', author: 'Roald Dahl', genre: 'Children\'s fiction', pages: 48 },
        { id: 'book-19', title: 'The Minpins', author: 'Roald Dahl', genre: 'Fantasy', pages: 48 },
        { id: 'book-20', title: 'Rhyme Stew', author: 'Roald Dahl', genre: 'Poetry', pages: 80 },
        { id: 'book-21', title: 'My Uncle Oswald', author: 'Roald Dahl', genre: 'Fiction', pages: 208 },
        { id: 'book-22', title: 'Over to You: Ten Stories of Flyers and Flying', author: 'Roald Dahl', genre: 'Fiction', pages: 256 },
        { id: 'book-23', title: 'Someone Like You', author: 'Roald Dahl', genre: 'Fiction', pages: 256 },
        { id: 'book-24', title: 'Kiss Kiss', author: 'Roald Dahl', genre: 'Fiction', pages: 288 },
        { id: 'book-25', title: 'Switch Bitch', author: 'Roald Dahl', genre: 'Fiction', pages: 210 },
        { id: 'book-26', title: 'More Tales of the Unexpected', author: 'Roald Dahl', genre: 'Fiction', pages: 224 },
        { id: 'book-27', title: 'Roald Dahl\'s Guide to Railway Safety', author: 'Roald Dahl', genre: 'Non-fiction', pages: 32 },
        { id: 'book-28', title: 'Where the Wild Things Are', author: 'Maurice Sendak', genre: 'Children\'s fiction', pages: 48 },
        { id: 'book-29', title: 'The Very Hungry Caterpillar', author: 'Eric Carle', genre: 'Picture book', pages: 26 },
        { id: 'book-30', title: 'Green Eggs and Ham', author: 'Dr. Seuss', genre: 'Children\'s fiction', pages: 62 },
        { id: 'book-31', title: 'Goodnight Moon', author: 'Margaret Wise Brown', genre: 'Picture book', pages: 32 },
        { id: 'book-32', title: 'The Cat in the Hat', author: 'Dr. Seuss', genre: 'Children\'s fiction', pages: 61 },
        { id: 'book-33', title: 'Charlotte\'s Web', author: 'E.B. White', genre: 'Children\'s fiction', pages: 192 },
        { id: 'book-34', title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy', pages: 309 },
        { id: 'book-35', title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', genre: 'Fantasy', pages: 200 },
        { id: 'book-36', title: 'The Gruffalo', author: 'Julia Donaldson', genre: 'Picture book', pages: 32 },
        { id: 'book-37', title: 'Matilda', author: 'Roald Dahl', genre: 'Children\'s fiction', pages: 240 },
        { id: 'book-38', title: 'The Tale of Peter Rabbit', author: 'Beatrix Potter', genre: 'Children\'s fiction', pages: 70 },
        { id: 'book-39', title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis', genre: 'Fantasy', pages: 208 },
        { id: 'book-40', title: 'Anne of Green Gables', author: 'L.M. Montgomery', genre: 'Fiction', pages: 320 },
        { id: 'book-41', title: 'The Wind in the Willows', author: 'Kenneth Grahame', genre: 'Children\'s fiction', pages: 256 },
        { id: 'book-42', title: 'Black Beauty', author: 'Anna Sewell', genre: 'Fiction', pages: 255 },
        { id: 'book-43', title: 'Winnie-the-Pooh', author: 'A.A. Milne', genre: 'Children\'s fiction', pages: 145 },
        { id: 'book-44', title: 'The Secret Garden', author: 'Frances Hodgson Burnett', genre: 'Fiction', pages: 331 },
        { id: 'book-45', title: 'Pippi Longstocking', author: 'Astrid Lindgren', genre: 'Children\'s fiction', pages: 207 },
        { id: 'book-46', title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', genre: 'Fantasy', pages: 96 },
        { id: 'book-47', title: 'Paddington Bear', author: 'Michael Bond', genre: 'Children\'s fiction', pages: 176 },
        { id: 'book-48', title: 'The BFG', author: 'Roald Dahl', genre: 'Fantasy', pages: 224 },
        { id: 'book-49', title: 'A Bear Called Paddington', author: 'Michael Bond', genre: 'Children\'s fiction', pages: 159 },
        { id: 'book-50', title: 'The Rainbow Fish', author: 'Marcus Pfister', genre: 'Picture book', pages: 24 },
        { id: 'book-51', title: 'Curious George', author: 'H.A. Rey', genre: 'Children\'s fiction', pages: 48 },
        { id: 'book-52', title: 'The Lorax', author: 'Dr. Seuss', genre: 'Children\'s fiction', pages: 72 },
        { id: 'book-53', title: 'Stuart Little', author: 'E.B. White', genre: 'Children\'s fiction', pages: 131 },
        { id: 'book-54', title: 'The Velveteen Rabbit', author: 'Margery Williams', genre: 'Children\'s fiction', pages: 40 },
        { id: 'book-55', title: 'Little House on the Prairie', author: 'Laura Ingalls Wilder', genre: 'Historical fiction', pages: 335 },
        { id: 'book-56', title: 'The Tale of Despereaux', author: 'Kate DiCamillo', genre: 'Fantasy', pages: 272 },
        { id: 'book-57', title: 'Peter Pan', author: 'J.M. Barrie', genre: 'Fantasy', pages: 207 },
        { id: 'book-58', title: 'The Boxcar Children', author: 'Gertrude Chandler Warner', genre: 'Mystery', pages: 154 },
        { id: 'book-59', title: 'Island of the Blue Dolphins', author: 'Scott O\'Dell', genre: 'Historical fiction', pages: 192 },
        { id: 'book-60', title: 'The Indian in the Cupboard', author: 'Lynne Reid Banks', genre: 'Fantasy', pages: 181 },
        { id: 'book-61', title: 'The Phantom Tollbooth', author: 'Norton Juster', genre: 'Fantasy', pages: 256 },
        { id: 'book-62', title: 'A Wrinkle in Time', author: 'Madeleine L\'Engle', genre: 'Science fiction', pages: 211 },
        { id: 'book-63', title: 'The Snowy Day', author: 'Ezra Jack Keats', genre: 'Picture book', pages: 40 },
        { id: 'book-64', title: 'The Polar Express', author: 'Chris Van Allsburg', genre: 'Picture book', pages: 32 },
        { id: 'book-65', title: 'Sarah, Plain and Tall', author: 'Patricia MacLachlan', genre: 'Historical fiction', pages: 64 },
        { id: 'book-66', title: 'The Mouse and the Motorcycle', author: 'Beverly Cleary', genre: 'Children\'s fiction', pages: 186 },
        { id: 'book-67', title: 'Holes', author: 'Louis Sachar', genre: 'Adventure', pages: 233 },
        { id: 'book-68', title: 'The Little Engine That Could', author: 'Watty Piper', genre: 'Children\'s fiction', pages: 48 },
        { id: 'book-69', title: 'The Giving Tree', author: 'Shel Silverstein', genre: 'Children\'s fiction', pages: 64 },
        { id: 'book-70', title: 'Stone Soup', author: 'Marcia Brown', genre: 'Children\'s fiction', pages: 48 },
        { id: 'book-71', title: 'The True Story of the Three Little Pigs', author: 'Jon Scieszka', genre: 'Children\'s fiction', pages: 32 },
        { id: 'book-72', title: 'Corduroy', author: 'Don Freeman', genre: 'Children\'s fiction', pages: 32 },
        { id: 'book-73', title: 'Frog and Toad Are Friends', author: 'Arnold Lobel', genre: 'Children\'s fiction', pages: 64 },
        { id: 'book-74', title: 'The Tale of Jemima Puddle-Duck', author: 'Beatrix Potter', genre: 'Children\'s fiction', pages: 59 },
        { id: 'book-75', title: 'If You Give a Mouse a Cookie', author: 'Laura Numeroff', genre: 'Children\'s fiction', pages: 40 },
        { id: 'book-76', title: 'Guess How Much I Love You', author: 'Sam McBratney', genre: 'Picture book', pages: 32 },
        { id: 'book-78', title: 'Blueberries for Sal', author: 'Robert McCloskey', genre: 'Children\'s fiction', pages: 55 },
        { id: 'book-79', title: 'Chicka Chicka Boom Boom', author: 'Bill Martin Jr. and John Archambault', genre: 'Alphabet book', pages: 40 },
        { id: 'book-80', title: 'Don\'t Let the Pigeon Drive the Bus!', author: 'Mo Willems', genre: 'Children\'s fiction', pages: 40 },
        { id: 'book-81', title: 'The Day the Crayons Quit', author: 'Drew Daywalt', genre: 'Picture book', pages: 40 },
        { id: 'book-82', title: 'The Napping House', author: 'Audrey Wood', genre: 'Children\'s fiction', pages: 32 },
        { id: 'book-83', title: 'Alexander and the Terrible, Horrible, No Good, Very Bad Day', author: 'Judith Viorst', genre: 'Picture book', pages: 32 },
        { id: 'book-84', title: 'The Story of Ferdinand', author: 'Munro Leaf', genre: 'Children\'s fiction', pages: 72 },
        { id: 'book-85', title: 'Where the Sidewalk Ends', author: 'Shel Silverstein', genre: 'Poetry', pages: 176 },
        { id: 'book-86', title: 'The Monster at the End of This Book', author: 'Jon Stone', genre: 'Picture book', pages: 32 },
        { id: 'book-87', title: 'Love You Forever', author: 'Robert Munsch', genre: 'Picture book', pages: 32 },
        { id: 'book-88', title: 'Owl Moon', author: 'Jane Yolen', genre: 'Picture book', pages: 32 },
        { id: 'book-89', title: 'Caps for Sale', author: 'Esphyr Slobodkina', genre: 'Children\'s fiction', pages: 48 },
        { id: 'book-90', title: 'The Paper Bag Princess', author: 'Robert Munsch', genre: 'Picture book', pages: 32 },
        { id: 'book-91', title: 'The Snowman', author: 'Raymond Briggs', genre: 'Picture book', pages: 32 },
        { id: 'book-92', title: 'The Little House', author: 'Virginia Lee Burton', genre: 'Children\'s fiction', pages: 44 },
        { id: 'book-93', title: 'Madeline', author: 'Ludwig Bemelmans', genre: 'Picture book', pages: 54 },
        { id: 'book-94', title: 'The Relatives Came', author: 'Cynthia Rylant', genre: 'Picture book', pages: 32 },
        { id: 'book-95', title: 'Sylvester and the Magic Pebble', author: 'William Steig', genre: 'Children\'s fiction', pages: 42 },
        { id: 'book-96', title: 'Make Way for Ducklings', author: 'Robert McCloskey', genre: 'Picture book', pages: 76 },
        { id: 'book-97', title: 'Jumanji', author: 'Chris Van Allsburg', genre: 'Fantasy', pages: 32 },
        { id: 'book-98', title: 'The Very Quiet Cricket', author: 'Eric Carle', genre: 'Picture book', pages: 26 },
        { id: 'book-99', title: 'The Little Red Hen', author: 'Paul Galdone', genre: 'Folktale', pages: 48 },
        { id: 'book-100', title: 'Miss Rumphius', author: 'Barbara Cooney', genre: 'Picture book', pages: 32 },
        { id: 'book-101', title: 'The Mitten', author: 'Jan Brett', genre: 'Picture book', pages: 32 },
        { id: 'book-102', title: 'The Garden of Abdul Gasazi', author: 'Chris Van Allsburg', genre: 'Fantasy', pages: 32 }
    ];

    document.addEventListener("DOMContentLoaded", function() {
        const bookshelf = document.getElementById('bookshelf');
        books.sort((a, b) => a.title.localeCompare(b.title));
    
        books.forEach(book => {
            bookshelf.appendChild(createBookElement(book));
        });
    
        // Check the first radio button and update book info
        if (books.length > 0) {
            const firstBookRadio = document.querySelector('.bookframe .book');
            if (firstBookRadio) {
                firstBookRadio.checked = true;
                updateBookInfo(books[0].id);
            }
        }
    
        document.querySelectorAll('.bookframe .book').forEach(function(bookRadioButton) {
            bookRadioButton.addEventListener('change', function() {
                if (this.checked) {
                    currentBookId = this.value; // Update currentBookId when a book is selected
                    updateBookInfo(this.value);
                }
            });
        });

        const sortBySelect = document.getElementById('sort-by');
        sortBySelect.addEventListener('change', function() {
            sortBooks(this.value);
        });
        assignRadioListeners();
        
    });

    function sortBooks(sortBy) {
        switch (sortBy) {
            case 'title':
                books.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'author':
                books.sort((a, b) => a.author.localeCompare(b.author));
                break;
            case 'genre':
                books.sort((a, b) => a.genre.localeCompare(b.genre));
                break;
            case 'pages':
                books.sort((a, b) => a.pages - b.pages);
                break;
            default:
                books.sort((a, b) => a.title.localeCompare(b.title));
        }
        updateBookshelf();
    }

    function updateBookshelf() {
        const bookshelf = document.getElementById('bookshelf');
        bookshelf.innerHTML = ''; // Clear existing books
        books.forEach(book => {
            bookshelf.appendChild(createBookElement(book));
        });
        assignRadioListeners(); // Reassign radio listeners
    }

const scrollIndicator = document.getElementById('scroll-indicator');
const scrollHandle = document.getElementById('scroll-handle');
const bookshelf = document.getElementById('bookshelf');
let currentBookId = 'book-01';

let isDragging = false;
let startX, scrollLeft;

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    e.preventDefault();

    // Calculate the position of the scroll handle relative to the indicator
    const indicatorRect = scrollIndicator.getBoundingClientRect();
    const handleRect = scrollHandle.getBoundingClientRect();
    const indicatorLeft = indicatorRect.left;
    const indicatorRight = indicatorRect.right;
    const handleWidth = handleRect.width;

    // Calculate the new left position for the scroll handle
    let newLeft = e.clientX - indicatorLeft - handleWidth / 2;

    // Ensure that the scroll handle stays within the bounds of the indicator
    if (newLeft < 0) {
        newLeft = 0;
    } else if (newLeft > indicatorRight - indicatorLeft - handleWidth) {
        newLeft = indicatorRight - indicatorLeft - handleWidth;
    }

    scrollHandle.style.left = newLeft + 'px';

    // Calculate the scroll percentage based on the handle's position
    const scrollPercentage = (newLeft / (indicatorRight - indicatorLeft - handleWidth)) * 100;

    // Request to animate the scroll
    requestAnimationFrame(() => smoothScrollToPercentage(scrollPercentage));
});

function smoothScrollToPercentage(percentage) {
    const targetScrollLeft = percentage / 100 * (bookshelf.scrollWidth - bookshelf.clientWidth);
    smoothScroll(bookshelf, targetScrollLeft);
}

function smoothScroll(element, targetScrollLeft) {
    const currentScrollLeft = element.scrollLeft;
    const diff = targetScrollLeft - currentScrollLeft;
    if (Math.abs(diff) < 1) {
        element.scrollLeft = targetScrollLeft;
        return;
    }
    element.scrollLeft += diff * 0.1; // The 0.1 factor controls the smoothness
    requestAnimationFrame(() => smoothScroll(element, targetScrollLeft));
}

scrollHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
    scrollHandle.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    scrollHandle.style.cursor = 'grab';
});

// Prevent text selection during dragging
scrollHandle.addEventListener('dragstart', (e) => {
  e.preventDefault();
});


function updateBookInfo(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        // Update Title
        const titleElement = document.getElementById('editable-title');
        titleElement.innerText = book.title;
        titleElement.contentEditable = false; // Reset contentEditable status

        // Update Author
        const authorElement = document.getElementById('editable-author');
        authorElement.innerHTML = book.author + '</span>';
        authorElement.contentEditable = false; // Reset contentEditable status

        // Update Genre
        const genreElement = document.getElementById('editable-genre');
        genreElement.innerHTML = book.genre + '</span>';
        genreElement.contentEditable = false; // Reset contentEditable status

        // Update Pages
        const pagesElement = document.getElementById('editable-pages');
        pagesElement.innerHTML = book.pages + '</span>';
        pagesElement.contentEditable = false; // Reset contentEditable status

        // Hide input field and reset form buttons
        document.getElementById('page-number-input').style.display = 'none';
        document.querySelector('.form-buttons').style.display = 'none';
        document.querySelectorAll('.triangle-indicator').forEach(indicator => {
            indicator.style.display = 'none';
        });

        // Show the triangle indicator for the selected book
        const selectedBookElement = document.getElementById(bookId);
        const triangleIndicator = selectedBookElement.querySelector('.triangle-indicator');
        if (triangleIndicator) {
            triangleIndicator.style.display = 'block';
        }
    }
}



function createBookElement(book) {
    const bookFrame = document.createElement('div');
    bookFrame.className = 'bookframe';

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.className = 'book';
    radioInput.id = book.id;
    radioInput.value = book.id;
    radioInput.name = 'book';
    bookFrame.appendChild(radioInput);

    const bookInfo = document.createElement('div');
    bookInfo.innerHTML = `
        <a href="#" style="font-size: 12px;">${book.title}</a>
        <span style="font-size: 10px;">${book.description}</span>
    `;

    const baseWidth = 100; // Base width for books, adjust as needed
    const widthFactor = 0.5; // Adjust this factor to control the variation
    const bookWidth = baseWidth + (book.pages * widthFactor);
    bookFrame.style.width = bookWidth + 'px';

    // Generate a random color and its darker shade
    const randomColor = getRandomColor();
    const darkerShade = getDarkerShade(randomColor);

    // Set the linear gradient with random color and its darker shade
    bookFrame.style.backgroundImage = `linear-gradient(to right, ${randomColor} 50%, ${darkerShade} 50%)`;

    adjustTitleSize(bookInfo, bookWidth);
    bookFrame.appendChild(bookInfo);

    const labelDiv = document.createElement('div');
    labelDiv.className = 'label';
    labelDiv.innerHTML = `<label for="${book.id}"></label><div>${book.title}</div>`;
    bookFrame.appendChild(labelDiv);

    return bookFrame;
}


// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getDarkerShade(color) {
    let darkerShade = '#';
    for (let i = 1; i < 7; i += 2) {
        const shade = Math.max(0, parseInt(color.substring(i, i + 2), 16) - 32);
        darkerShade += shade.toString(16).padStart(2, '0');
    }
    return darkerShade;
}

function adjustTitleSize(bookInfo, bookWidth) {
    const title = bookInfo.querySelector('a'); // Assuming title is within 'a' tag
    let titleSize = 20; // Start with a base font size, adjust as needed
    title.style.fontSize = titleSize + 'px';

    while (title.offsetWidth > bookWidth && titleSize > 10) {
        titleSize--;
        title.style.fontSize = titleSize + 'px';
    }
}

function editBookInfo() {
    // Hide remove buttons if they are visible
    document.querySelector('.remove-buttons').style.display = 'none';

    // Enable contentEditable for title, author, and genre
    document.getElementById('editable-title').contentEditable = true;
    document.getElementById('editable-author').contentEditable = true;
    document.getElementById('editable-genre').contentEditable = true;

    // Show the page number input and hide the page number span
    document.getElementById('editable-pages').style.display = 'none';
    document.getElementById('page-number-input').style.display = 'inline';
    document.getElementById('page-number-input').value = document.getElementById('editable-pages').innerText;

    // Show save and cancel buttons
    document.querySelector('.form-buttons').style.display = 'block';
}

  
  // Function to save the edited information
  function saveBookInfo() {
    document.getElementById('editable-title').contentEditable = false;
    document.getElementById('editable-author').contentEditable = false;
    document.getElementById('editable-genre').contentEditable = false;
    document.getElementById('editable-pages').contentEditable = false;
  
    const pageNumber = document.getElementById('page-number-input').value;
    document.getElementById('editable-pages').innerText = pageNumber;

    // Hide the input field and show the page number span
    document.getElementById('editable-pages').style.display = 'inline';
    document.getElementById('page-number-input').style.display = 'none';
  
    document.querySelector('.form-buttons').style.display = 'none';
    assignRadioListeners();
  }
  
  function cancelEdit() {
    document.getElementById('editable-title').contentEditable = false;
    document.getElementById('editable-author').contentEditable = false;
    document.getElementById('editable-genre').contentEditable = false;
    document.getElementById('editable-pages').contentEditable = false;
  
    document.querySelector('.form-buttons').style.display = 'none';
  
    // Revert any changes made during editing

    document.getElementById('editable-pages').style.display = 'inline';
    document.getElementById('page-number-input').style.display = 'none';
  
    document.querySelector('.form-buttons').style.display = 'none';
    assignRadioListeners();
  }
  
  // Function to update book information on the shelf
  function updateShelfDisplay(bookId, title, author, pages) {
    const bookElement = document.querySelector(`#${bookId} .book-info`);
    if (bookElement) {
      bookElement.innerHTML = `<a href="#" style="font-size: 12px;">${title}</a><span style="font-size: 10px;">${author}, ${pages} pages</span>`;
    }
  }
  
  function assignRadioListeners() {
    document.querySelectorAll('.bookframe .book').forEach(function(bookRadioButton) {
        bookRadioButton.addEventListener('change', function() {
            if (this.checked) {
                currentBookId = this.value; // Update currentBookId when a book is selected
                updateBookInfo(this.value);
                // Make the book info card visible again
                document.querySelector('.book-info-card').style.display = 'block';
            }
        });
    });
}

function showRemoveButtons() {
    // Hide edit and form buttons if they are visible
    document.querySelector('.form-buttons').style.display = 'none';
    // Show remove buttons
    document.querySelector('.remove-buttons').style.display = 'block';
  }
  
  function confirmRemove() {
    const bookIndex = books.findIndex(b => b.id === currentBookId);
    if (bookIndex > -1) {
      // Remove the book from the array
      books.splice(bookIndex, 1);
      // Update the bookshelf display
      const bookshelf = document.getElementById('bookshelf');
      bookshelf.innerHTML = ''; // Clear existing books
      books.forEach(book => {
        bookshelf.appendChild(createBookElement(book)); // Add books again
      });
      assignRadioListeners(); // Reassign radio listeners
    }
    // Hide remove buttons and the book info card
    document.querySelector('.remove-buttons').style.display = 'none';
    document.querySelector('.book-info-card').style.display = 'none';
  }
  
  
  function cancelRemove() {
    // Hide remove buttons
    document.querySelector('.remove-buttons').style.display = 'none';
  }