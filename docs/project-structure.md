Project Structure

├── README.md # Project documentation and setup instructions
├── android/ # Android native configuration and build files
│ ├── app
│ ├── build.gradle
│ ├── gradle
│ ├── gradle.properties
│ ├── gradlew
│ ├── gradlew.bat
│ └── settings.gradle
├── app/ # Main application code using Expo Router
│ ├── (auth)/ # Authentication related screens (grouped routes)
│ ├── (tabs)/ # Tab navigation screens (grouped routes)
│ ├── \_layout.tsx # Root layout component for navigation
│ ├── global.css # Global styles
│ └── index.tsx # Entry point screen
├── app.json # Expo configuration
├── assets/ # Static assets
│ ├── fonts/ # Custom fonts
│ ├── icons/ # App icons
│ └── images/ # Image assets
├── babel.config.js # Babel transpiler configuration
├── components/ # Reusable UI components
│ ├── CustomButton.tsx # Custom button component
│ ├── Divider.tsx # Line separator component
│ ├── FormField.tsx # Form input component
│ └── SocialButton.tsx # Social media button component
├── docs/ # Project documentation
│ ├── env-switcher.md # Environment switching guide
│ ├── prd.md # Product requirements document
│ └── project-structure.md # This file - project structure guide
├── expo-env.d.ts # Expo environment type definitions
├── ios/ # iOS native configuration and build files
│ ├── Podfile
│ ├── Podfile.lock
│ ├── Podfile.properties.json
│ ├── Pods
│ ├── appName
│ ├── appName.xcodeproj
│ ├── appName.xcworkspace
│ └── build
├── lib/ # Core library code
│ └── utils/ # Utility functions and helpers
├── metro.config.js # React Native bundler configuration
├── nativewind-env.d.ts # NativeWind type definitions
├── package-lock.json
├── package.json # Project dependencies and scripts
├── prisma/ # Database ORM
│ ├── migrations/ # Database migration files
│ ├── schema.prisma # Database schema definition
│ └── seeds/ # Seed data for database
├── screenshots/ # UI screenshots for documentation
├── scripts/ # Utility scripts
│ └── switchEnv.js # Environment switching script
├── supabase/ # Supabase configuration
│ └── config.toml # Supabase settings
├── tailwind.config.js # TailwindCSS/NativeWind configuration
├── tsconfig.json # TypeScript configuration
└── types/ # Global TypeScript type definitions

```

```
