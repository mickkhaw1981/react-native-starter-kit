# React Native Expo Project Structure Breakdown

```
├── README.md                   # Project documentation and setup instructions
├── app                         # Main directory using Expo Router's file-based routing
│   ├── (auth)                  # Authentication route group with sign-in/up screens
│   ├── (tabs)                  # Main application tab navigation screens
│   ├── _layout.tsx             # Root layout configuration for the entire app
│   ├── global.css              # Application-wide styles
│   └── index.tsx               # Entry point/home screen
├── app.json                    # Expo configuration file defining app settings
├── assets                      # Static resources used throughout the app
│   ├── fonts                   # Custom font files (Rubik family)
│   ├── icons                   # Icon assets (like google.png)
│   └── images                  # App icons, logos and splash screens
├── babel.config.js             # JavaScript transpiler settings
├── components                  # Reusable UI elements shared across screens
├── docs                        # Project documentation files
├── expo-env.d.ts               # TypeScript declarations for Expo environment
├── lib                         # Shared code libraries and utilities
│   └── utils                   # Helper functions used throughout the app
├── metro.config.js             # React Native bundler configuration
├── nativewind-env.d.ts         # TypeScript declarations for NativeWind
├── package.json                # Project dependencies and scripts
├── screenshots                 # Application screenshots for documentation
├── tailwind.config.js          # TailwindCSS/NativeWind styling configuration
└── tsconfig.json               # TypeScript compiler settings
```
