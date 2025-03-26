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

## Best Practices

- Write comprehensive tests for new functionality
- Keep code concise and commits semantic
- Place reusable logic in appropriate utility files
- Implement efficient data fetching and caching
- Handle errors and loading states appropriately
- Follow routing conventions
- Use absolute imports (@/ for src, ~/ for outside)

## Documentation

- Consult `prd.md` at project root for goals and features
- Additional documentation available in `docs` directory

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Supabase Documentation](https://supabase.io/docs)
