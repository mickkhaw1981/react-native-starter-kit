# Database Environment Switcher

This project includes a convenient system to switch between local, staging, and production databases during development.

## Available Commands

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

## Environment Files Setup

1. `.env.local` - Local development database configuration
2. `.env.staging` - Staging/testing database configuration
3. `.env.production` - Production database configuration (never commit this file)
4. `.env.sample` - Template for environment variables (safe to commit)

The switching system will:

- ✓ Automatically copy the correct environment file
- ✓ Validate required database variables
- ✓ Show clear status messages
- ⚠️ Display appropriate warnings for each environment
- 🔒 Include safety checks to prevent accidental misuse

## Environment Indicators

Each environment has its own indicator and appropriate warning level:

- 🏠 **Local**: Development environment (no warnings)
- 🚧 **Staging**: Testing environment (moderate warnings)
- 🌐 **Production**: Live environment (strong warnings)

## Example Outputs

### Local Environment

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

### Staging Environment

```bash
✓ Environment Switch Complete
🚧 STAGING Environment Active

Database Configuration:
📡 DATABASE_URL: your-staging-database-url
🔌 DIRECT_URL: your-staging-direct-url

Status:
📂 Source: .env.staging
✨ Target: .env

⚠️ WARNING: Staging Database Active
🔨 You are now connected to the STAGING database
📢 This environment is for testing purposes
```

### Production Environment

```bash
✓ Environment Switch Complete
🌐 PRODUCTION Environment Active

Database Configuration:
📡 DATABASE_URL: your-production-database-url
🔌 DIRECT_URL: your-production-direct-url

Status:
📂 Source: .env.production
✨ Target: .env

⚠️ WARNING: Production Database Active
🔒 You are now connected to the PRODUCTION database
📢 Exercise extreme caution with database operations
```
