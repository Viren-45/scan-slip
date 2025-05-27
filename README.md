# ScanSlip - Intelligent Receipt Scanning & Analysis

ScanSlip is a modern web application that allows users to scan, analyze, and organize their receipts with AI-powered precision. It extracts key information from receipt PDFs, categorizes expenses, and provides valuable insights into spending patterns.

![ScanSlip](https://scan-slip.vercel.app/opengraph-image.png)

## Features

- **PDF Receipt Scanning**: Upload PDF receipts via drag-and-drop or file selection
- **AI-Powered Data Extraction**: Automatically extract merchant details, transaction amounts, dates, and line items
- **Receipt Organization**: View, sort, and manage all your uploaded receipts in one place
- **Detailed Receipt Analysis**: See comprehensive breakdowns of each receipt with extracted data
- **Usage Tiers**: Free, Starter, and Pro plans with different scan limits and feature sets
- **Secure Authentication**: User authentication and authorization with Clerk
- **Responsive Design**: Beautiful, modern UI that works on desktop and mobile devices

## Tech Stack

ScanSlip is built with a modern tech stack:

- **Frontend**: [Next.js 15](https://nextjs.org/) with [React 19](https://react.dev/)
- **Backend**: [Convex](https://convex.dev/) for database and server functions
- **Authentication**: [Clerk](https://clerk.com/) for user management
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive design
- **UI Components**: Custom components with [Radix UI](https://www.radix-ui.com/)
- **File Storage**: Convex Storage for receipt files
- **Background Processing**: [Inngest](https://www.inngest.com/) for receipt processing
- **Feature Flags**: [Schematic](https://www.schematichq.com/) for entitlements and feature management
- **Payments**: [Stripe](https://stripe.com/) for subscription management

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Convex account
- Clerk account
- (Optional) Schematic account for feature flags
- (Optional) Inngest account for background processing
- (Optional) Stripe account for payments

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/scan-slip.git
   cd scan-slip
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # Convex
   NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
   
   # Optional: Schematic for feature flags
   NEXT_PUBLIC_SCHEMATIC_PUBLIC_KEY=your_schematic_public_key
   SCHEMATIC_API_KEY=your_schematic_api_key
   
   # Optional: Stripe for payments
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Convex Setup

1. Initialize Convex:
   ```bash
   npx convex dev
   ```

2. Follow the Convex setup instructions to connect your project.

3. Configure Clerk with Convex by following the [Convex Clerk integration guide](https://docs.convex.dev/auth/clerk).

## Deployment

ScanSlip can be deployed to Vercel:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Configure the environment variables in Vercel.
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Convex](https://convex.dev/) and [Next.js](https://nextjs.org/)
- Authentication by [Clerk](https://clerk.com/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
