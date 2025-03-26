# React Native Starter Kit 🚀

A modern React Native starter kit built with [Expo](https://expo.dev), featuring a robust tech stack and best practices for mobile development.

## Tech Stack

- React Native with Expo
- TypeScript
- NativeWind & Tailwind CSS
- Prisma (ORM)
- Supabase (Database)
- Lucide React Native (Icons)

## Project Structure

The project follows a file-based routing structure using Expo Router:

```
app/                  # Main application code
├── components/       # Reusable components
│   └── icons/       # Custom icons
├── lib/             # Shared utilities
│   └── utils/
│       ├── shared.ts   # Shared utilities
│       └── server.ts   # Server utilities
└── ...              # Other app directories
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:

   - Copy `.env.example` to `.env.local`
   - Update the variables as needed
   - Note: Use `EXPO_PUBLIC_` prefix for frontend-accessible variables

3. Start the development server:
   ```bash
   npx expo start
   ```

## 🔄 Database Environment Switching

This project includes a convenient system to switch between local, staging, and production databases during development.

### Available Commands

```bash
# Switch to local database
npm run use:local

# Switch to staging database
npm run use:staging

# Switch to production database
npm run use:prod

# Check current database connection
npm run db:current

# Validate database configuration
npm run db:check
```

### Environment Files Setup

1. `.env.local` - Local development database configuration
2. `.env.staging` - Staging/testing database configuration
3. `.env.production` - Production database configuration (never commit this file)
4. `.env.example` - Template for environment variables (safe to commit)

The switching system will:

- ✓ Automatically copy the correct environment file
- ✓ Validate required database variables
- ✓ Show clear status messages
- ⚠️ Display appropriate warnings for each environment
- 🔒 Include safety checks to prevent accidental misuse

### Environment Indicators

Each environment has its own indicator and appropriate warning level:

- 🏠 **Local**: Development environment (no warnings)
- 🚧 **Staging**: Testing environment (moderate warnings)
- 🌐 **Production**: Live environment (strong warnings)

### Example Outputs

#### Local Environment

```bash
✓ Environment Switch Complete
🏠 LOCAL Environment Active

Database Configuration:
📡 DATABASE_URL: your-local-database-url
🔌 DIRECT_URL: your-local-direct-url

Status:
📂 Source: .env.local
✨ Target: .env
```

#### Staging Environment

```bash
✓ Environment Switch Complete
🚧 STAGING Environment Active

Database Configuration:
📡 DATABASE_URL: your-staging-database-url
🔌 DIRECT_URL: your-staging-direct-url

Status:
📂 Source: .env.staging
✨ Target: .env

⚠️  WARNING: Staging Database Active
🔨 You are now connected to the STAGING database
📢 This environment is for testing purposes
```

#### Production Environment

```bash
✓ Environment Switch Complete
🌐 PRODUCTION Environment Active

Database Configuration:
📡 DATABASE_URL: your-production-database-url
🔌 DIRECT_URL: your-production-direct-url

Status:
📂 Source: .env.production
✨ Target: .env

⚠️  WARNING: Production Database Active
🔒 You are now connected to the PRODUCTION database
📢 Exercise extreme caution with database operations
```

## Development Guidelines

- **TypeScript**: Use strict mode and avoid `any` types
- **Components**:
  - Default to Server Components where possible
  - Write clean, concise components
  - Follow mobile-first responsive design principles
- **Styling**:
  - Use NativeWind/Tailwind CSS for styling
  - Follow mobile-first approach
  - Support dark mode with `dark:` classes
- **Icons**: Use `lucide-react-native` for icons; custom icons in `components/icons`
- **Database**:
  - Use Prisma as source of truth
  - Run migrations with `npx prisma migrate dev`
  - Never use `npx prisma db push`
  - Use camelCase for fields, snake_case for tables

## Documentation

- Consult `prd.md` at project root for goals and features
- Additional documentation available in `docs` directory

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Supabase Documentation](https://supabase.io/docs)
