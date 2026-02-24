# My Library

A simple, elegant web application for managing your personal book collection. Add books, track your reading progress, and organize your library with an intuitive interface.

## Features

- ✨ **Add Books** - Create new book entries with title, author, page count, and read status
- 📚 **Track Reading** - Mark books as read or unread with a single click
- 🗑️ **Manage Collection** - Remove books from your library
- 💾 **Persistent Storage** - Books are stored in memory during the session
- 📱 **Responsive Design** - Beautiful grid layout that works on all devices
- ✅ **Code Quality** - ESLint configured for consistent code standards

## Project Structure

```
.
├── index.html          # Main HTML file with modal dialog and form
├── index.js            # Application logic and book management
├── package.json        # Project dependencies and scripts
├── eslint.config.js    # ESLint configuration
├── .eslintignore       # ESLint ignore rules
├── .gitignore          # Git ignore rules
├── .gitattributes      # Git attributes for line endings
├── GIT_FLOW.md         # Git Flow branching guidelines
└── README.md           # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/qoyman/Book-shelf.git
   cd Book-shelf
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify code quality**
   ```bash
   npm run lint
   ```

4. **Open in browser**
   - Open `index.html` in your web browser
   - Or use a local server:
     ```bash
     npx http-server
     ```

## Usage

### Adding a Book

1. Click the **"+ New Book"** button in the header
2. Fill in the book details:
   - **Title**: The name of the book
   - **Author**: The author's name
   - **Number of Pages**: Total page count
   - **I have read this book**: Check if you've already read it
3. Click **"Add Book"** to save
4. The book will appear in your library grid

### Managing Your Library

- **Mark as Read/Unread**: Click the green button on any book card to toggle read status
- **Remove a Book**: Click the red "Remove" button to delete a book from your library

## Development

### Available Scripts

```bash
# Run ESLint to check code quality
npm run lint

# Automatically fix linting issues
npm run lint:fix

# Run tests (not yet implemented)
npm run test
```

### Code Standards

This project uses ESLint to maintain consistent code quality. Key rules:

- Double quotes for strings
- Semicolons required
- 2-space indentation
- No console.log in production code
- Strict equality (===)

### Git Workflow

This project follows Git Flow. See [GIT_FLOW.md](./GIT_FLOW.md) for detailed branching guidelines.

#### Quick Git Commands

```bash
# Start a new feature
git flow feature start feature-name

# Finish a feature (merge to develop)
git flow feature finish feature-name

# Create a release
git flow release start 1.0.0
git flow release finish 1.0.0

# Hotfix for production
git flow hotfix start 1.0.1
git flow hotfix finish 1.0.1
```

## Architecture

### Separation of Concerns

The application separates data management from DOM manipulation:

- **Data Layer** (`myLibrary` array): Stores book objects with unique IDs
- **Logic Layer** (Book constructor, methods): Manages book operations
- **Presentation Layer** (displayBooks function): Renders UI based on data
- **Event Handling** (Event delegation): Uses a single listener on the container

### Key Components

#### Book Constructor
```javascript
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();  // Unique identifier
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
```

#### Book Methods
- `toggleRead()`: Toggle the read status of a book

#### Application Functions
- `addBookToLibrary()`: Add a new book to the library
- `removeBookFromLibrary()`: Remove a book by ID
- `displayBooks()`: Render all books to the DOM
- `setupBookContainerListener()`: Handle button clicks with event delegation
- `setupFormListeners()`: Handle form submission and modal

## Technologies Used

- **HTML5**: Semantic markup and dialog elements
- **CSS3**: Grid layout, flexbox, responsive design
- **JavaScript (ES6+)**: Modern JavaScript with object destructuring
- **ESLint**: Code quality and consistency

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements

- [ ] Local storage to persist books between sessions
- [ ] Search and filter functionality
- [ ] Book categories/genres
- [ ] Reading statistics
- [ ] Book ratings
- [ ] Export library as JSON/PDF

## Contributing

1. Follow Git Flow guidelines
2. Create feature branches from `develop`
3. Run `npm run lint:fix` before committing
4. Submit pull requests for review

## License

ISC

## Author

Your Name

## Support

For issues or questions, please create an issue on the [GitHub repository](https://github.com/qoyman/Book-shelf).
