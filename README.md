# React Skill Lab

A repository to demonstrate and practice various React concepts and patterns through practical implementations.

## Current Implementations

### 1. Image Gallery with Unsplash API
A feature-rich image gallery implementation showcasing:
- Image fetching from Unsplash API
- Search functionality for different image categories
- Pagination support
- Modal view for high-quality images
- Lazy loading and performance optimization

#### Setup and Configuration
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the root directory
4. Add your Unsplash API key:
```
REACT_APP_UNSPLACE_ACCESS_KEY=your_access_key_here
```
5. Start the development server:
```bash
npm start
```

#### Features Demonstrated
- API integration with environment variables
- React state management
- Component composition
- Modal implementations
- Image lazy loading
- Search functionality
- Pagination
- Error handling
- Loading states

## Project Structure
```
src/
  ├── components/
  │   ├── ImageList/        # Image grid display
  │   ├── Loading/          # Motion Loader
  │   ├── SearchBar/        # Image search component
  ├── App.js                # Root component
  └── .env                  # Environment variables
```

## Technical Stack
- React 18^
- CSS Modules
- Unsplash API
- Environment Variables

## Running the Project
1. Ensure you have Node.js installed (v14 or higher)
2. Follow the setup instructions above
3. The application will be available at `http://localhost:3000`

## Coming Soon
More implementations showcasing:
- Redux state management
- Custom hooks
- React Router
- Form handling
- Authentication
- And more...

## Contributing
Feel free to suggest new implementations or improvements through issues or pull requests.
