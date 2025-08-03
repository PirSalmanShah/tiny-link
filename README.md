# Tiny Link - URL Shortener with Analytics

A modern, feature-rich URL shortening service built with Next.js, featuring real-time analytics, geolocation tracking, and user authentication.



## 🌟 Features

### Core Functionality
- **URL Shortening**: Convert long URLs into short, shareable links
- **Custom Short Codes**: Generate unique 7-character codes using SHA-256 hashing
- **Click Tracking**: Monitor link performance with detailed analytics
- **Geolocation Tracking**: Track clicks by country and location using IP geolocation
- **User Authentication**: Secure login with NextAuth.js
- **User Dashboard**: Personal dashboard with analytics and link management

### Analytics & Insights
- **Real-time Statistics**: View total links, clicks, and performance metrics
- **Geographic Data**: Interactive map showing click locations worldwide
- **Click Analytics**: Detailed charts and graphs for link performance
- **Top Performing Links**: Identify your most successful shortened URLs

### User Experience
- **Modern UI**: Clean, responsive design with dark/light theme support
- **Instant Generation**: Quick URL shortening with immediate results
- **Mobile Responsive**: Optimized for all device sizes
- **Copy to Clipboard**: Easy sharing functionality
- **Link Management**: Organize and track your shortened URLs

## 🚀 Tech Stack

### Frontend
- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.1** - UI library
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Recharts** - Data visualization library
- **React Map GL** - Interactive maps with Mapbox

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database with Mongoose ODM
- **NextAuth.js** - Authentication solution
- **CryptoJS** - Cryptographic functions for URL hashing

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Class Variance Authority** - Component variant management

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- MongoDB database
- Mapbox API key (for geolocation features)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tiny-link
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   MAPBOX_ACCESS_TOKEN=your_mapbox_token
   ```

4. **Database Setup**
   - Ensure MongoDB is running
   - The application will automatically create required collections

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
tiny-link/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── dashboard/     # Analytics API
│   │   ├── delete/        # Link deletion
│   │   └── generate/      # URL generation
│   ├── components/        # React components
│   ├── dashboard/         # User dashboard page
│   ├── [code]/           # Dynamic route for shortened URLs
│   ├── models/           # MongoDB schemas
│   └── globals.css       # Global styles
├── components/           # Shared UI components
├── lib/                 # Utility functions
├── public/              # Static assets
└── package.json         # Dependencies and scripts
```

## 🔧 API Endpoints

### URL Generation
- `POST /api/generate` - Create a new shortened URL
- `GET /api/generate` - Get user's shortened URLs (authenticated)

### Authentication
- `GET /api/auth/[...nextauth]` - NextAuth.js authentication routes

### Analytics
- `GET /api/dashboard/geolocation` - Get click location data
- `GET /api/dashboard/highstats` - Get high-level statistics

### URL Redirection
- `GET /[code]` - Redirect to original URL and track click

## 📊 Database Schema

### URL Model
```javascript
{
  shortUrl: String,      // Complete shortened URL
  code: String,          // 7-character unique code
  originalUrl: String,   // Original long URL
  click: Number,         // Click count
  user: ObjectId,        // Reference to user (optional)
  createdAt: Date,       // Creation timestamp
  updatedAt: Date        // Last update timestamp
}
```

### Click Model
```javascript
{
  code: String,          // URL code
  latitude: Number,      // Click location latitude
  longitude: Number,     // Click location longitude
  country: String        // Country name
}
```

### User Model
```javascript
{
  userEmail: String,     // User's email address
  // Additional user fields as needed
}
```

## 🎨 Features in Detail

### URL Shortening Process
1. User enters a long URL
2. System generates a 7-character hash using SHA-256
3. Creates database entry with original and shortened URLs
4. Returns the shortened URL to the user

### Click Tracking
1. When someone clicks a shortened URL
2. System increments click counter
3. Captures visitor's IP address
4. Fetches geolocation data from freeipapi.com
5. Stores location data for analytics

### Analytics Dashboard
- **High Stats**: Total links, clicks, top URL, countries
- **Interactive Charts**: Line charts for click trends
- **Geographic Visualization**: Map showing click locations
- **Real-time Updates**: Live data refresh

## 🔒 Security Features

- **Input Validation**: URL format validation
- **Rate Limiting**: Protection against abuse
- **Authentication**: Secure user sessions
- **Data Sanitization**: Clean input processing
- **Environment Variables**: Secure configuration management



