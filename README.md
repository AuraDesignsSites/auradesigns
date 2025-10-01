# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/84a33e6a-5822-48f2-899c-908d1beeeb73

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/84a33e6a-5822-48f2-899c-908d1beeeb73) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Environment Variables

### Resend Email Integration

This project uses Resend for email functionality with the domain `send.auradesigns.net`. To set up email sending:

1. **Local Development:**
   - Copy `.env.local` and add your Resend API key:
   ```
   VITE_RESEND_API_KEY=your_resend_api_key_here
   ```

2. **Production (Vercel):**
   - Go to Vercel → Project → Settings → Environment Variables
   - Add `VITE_RESEND_API_KEY` with your Resend API key value
   - Make sure to set it for Production environment
   - **Note:** Since you already have `RESEND_API_KEY` set in Vercel, the code will use that as a fallback

**Important:** Never commit `.env.local` to version control.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/84a33e6a-5822-48f2-899c-908d1beeeb73) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
