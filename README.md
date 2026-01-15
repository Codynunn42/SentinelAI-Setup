# Sentinel AI Setup

This repository contains the Sentinel AI application setup files and configuration.

## Files

- `index.html` - Main entry point with Coinbase verification meta tag
- `app.js` - Stripe payment integration logic
- `Setup.sh` - Server setup script for installing dependencies
- `vercel.json` - Vercel deployment configuration

## Coinbase Verification

The application includes Coinbase verification via a meta tag in the HTML head:

```html
<meta name="base:app_id" content="6939c0f3e6be54f5ed71d533" />
```

This meta tag must be present at the root URL (`/`) for Coinbase to successfully verify the application.

## Deployment

### Vercel Configuration

The `vercel.json` file ensures that:
- The root path (`/`) serves `index.html`
- The `/callback` path also serves `index.html` (for OAuth flows)

### Production Deployment

To deploy to production:

1. Merge this branch to `main`
2. Vercel will automatically deploy from the `main` branch
3. Verify deployment using the curl commands below

## Verification Commands

After deploying to production, verify the meta tag is served correctly:

```bash
# Test root URL
curl -I https://app.sentinel.nunncorporation.com/

# Should return 200 OK

# Fetch HTML and check for meta tag
curl -s https://app.sentinel.nunncorporation.com/ | grep -i "base:app_id"

# Should output: <meta name="base:app_id" content="6939c0f3e6be54f5ed71d533" />

# Test callback URL (if needed)
curl -s https://app.sentinel.nunncorporation.com/callback | grep -i "base:app_id"

# Should also return the meta tag
```

## Local Testing

To test locally:

```bash
# Install a simple HTTP server
npm install -g http-server

# Serve the files
http-server . -p 8080

# Test in browser
open http://localhost:8080

# Or test with curl
curl -s http://localhost:8080/ | grep -i "base:app_id"
```

## Troubleshooting

If Coinbase verification fails:

1. Ensure the `main` branch has the latest changes including `index.html`
2. Check Vercel deployment logs to confirm the correct commit is deployed
3. Verify the production URL returns the HTML with meta tag (see verification commands above)
4. Ensure Vercel is configured to deploy from the `main` branch
5. Check that there are no caching issues (use curl with `-H "Cache-Control: no-cache"`)
