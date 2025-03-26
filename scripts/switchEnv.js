const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

const envFile = path.join(process.cwd(), ".env");
const targetEnv = process.argv[2];

// Console styling helpers
const styles = {
  error: "\x1b[31m",
  success: "\x1b[32m",
  info: "\x1b[36m",
  warning: "\x1b[33m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

// Environment indicators and configurations
const ENV_CONFIG = {
  local: {
    emoji: "🏠",
    label: "LOCAL",
    warning: false,
  },
  staging: {
    emoji: "🚧",
    label: "STAGING",
    warning: true,
    warningMessage: `${styles.warning}⚠️  WARNING: Staging Database Active${styles.reset}
🔨 You are now connected to the STAGING database
📢 This environment is for testing purposes`,
  },
  production: {
    emoji: "🌐",
    label: "PRODUCTION",
    warning: true,
    warningMessage: `${styles.warning}⚠️  WARNING: Production Database Active${styles.reset}
🔒 You are now connected to the PRODUCTION database
📢 Exercise extreme caution with database operations`,
  },
};

// Helper function to parse env file
const parseEnvFile = (filePath) => {
  const content = fs.readFileSync(filePath, "utf8");
  const result = {};

  // Split into lines and process each line
  content.split("\n").forEach((line) => {
    // Skip comments and empty lines
    if (!line || line.startsWith("#")) return;

    // Find the first = sign
    const equalIndex = line.indexOf("=");
    if (equalIndex === -1) return;

    // Split into key and value
    const key = line.slice(0, equalIndex).trim();
    let value = line.slice(equalIndex + 1).trim();

    // Remove quotes if present
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    result[key] = value;
  });

  return result;
};

// Validate environment name
if (!Object.keys(ENV_CONFIG).includes(targetEnv)) {
  console.error(
    `${styles.error}❌ Error:${styles.reset} Invalid environment specified
    ${styles.info}Available environments:${styles.reset}
    - ${styles.bold}local${styles.reset}     (${ENV_CONFIG.local.emoji} Local development)
    - ${styles.bold}staging${styles.reset}   (${ENV_CONFIG.staging.emoji} Testing environment)
    - ${styles.bold}production${styles.reset} (${ENV_CONFIG.production.emoji} Production environment)`
  );
  process.exit(1);
}

const sourceEnvFile = path.join(process.cwd(), `.env.${targetEnv}`);

// Check if source env file exists
if (!fs.existsSync(sourceEnvFile)) {
  console.error(
    `${styles.error}❌ Error:${styles.reset} Environment file not found
    ${styles.info}Expected:${styles.reset} ${sourceEnvFile}
    ${styles.info}Solution:${styles.reset} Create ${styles.bold}.env.${targetEnv}${styles.reset} file with required variables`
  );
  process.exit(1);
}

try {
  // Read and parse source env file
  const sourceContent = fs.readFileSync(sourceEnvFile, "utf8");
  const envContent = parseEnvFile(sourceEnvFile);

  // Copy the target env file to .env
  fs.writeFileSync(envFile, sourceContent, "utf8");

  // Debug log
  console.log(`${styles.info}Debug: Found environment variables:${styles.reset}
Keys found: ${Object.keys(envContent).join(", ")}
DATABASE_URL exists: ${Boolean(envContent.DATABASE_URL)}
DIRECT_URL exists: ${Boolean(envContent.DIRECT_URL)}
`);

  // Verify that required variables are present
  if (!envContent.DATABASE_URL || !envContent.DIRECT_URL) {
    console.error(
      `${styles.error}❌ Error:${styles.reset} Missing required database configuration
      ${styles.info}Required:${styles.reset}
      - DATABASE_URL
      - DIRECT_URL
      ${styles.info}Solution:${styles.reset} Add missing variables to ${styles.bold}.env.${targetEnv}${styles.reset}`
    );
    process.exit(1);
  }

  // Force reload of environment variables
  dotenv.config({ path: envFile, override: true });

  // Display environment switch success
  console.log(`
${styles.success}✓${styles.reset} Environment Switch Complete
${styles.bold}${ENV_CONFIG[targetEnv].emoji} ${ENV_CONFIG[targetEnv].label}${styles.reset} Environment Active

${styles.info}Database Configuration:${styles.reset}
📡 DATABASE_URL: ${envContent.DATABASE_URL}
🔌 DIRECT_URL: ${envContent.DIRECT_URL}

${styles.info}Status:${styles.reset}
📂 Source: ${sourceEnvFile}
✨ Target: ${envFile}
`);

  // Add environment-specific warning if applicable
  if (ENV_CONFIG[targetEnv].warning) {
    console.log(ENV_CONFIG[targetEnv].warningMessage + "\n");
  }

  // Verify the environment was loaded
  const loadedEnv = dotenv.config().parsed;
  if (!loadedEnv || !loadedEnv.DATABASE_URL) {
    console.error(
      `${styles.error}❌ Error:${styles.reset} Environment validation failed
      ${styles.info}Issue:${styles.reset} Failed to load environment variables
      ${styles.info}Solution:${styles.reset} Check file permissions and variable syntax in ${styles.bold}.env.${targetEnv}${styles.reset}`
    );
    process.exit(1);
  }
} catch (error) {
  console.error(
    `${styles.error}❌ Error:${styles.reset} Environment switch failed
    ${styles.info}Issue:${styles.reset} ${error.message}
    ${styles.info}Solution:${styles.reset} Check file permissions and try again`
  );
  process.exit(1);
}
