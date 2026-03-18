# Bieszczady Explorer
![App Preview](https://imgix.cosmicjs.com/977dd730-2318-11f1-8e73-95937fcad31d-photo-1500530855697-b586d89ba3ee-1773872394021.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A modern travel guide for Bieszczady, Poland featuring hiking trails, attractions, and cozy stays powered by Cosmic.

## Features
- Dynamic listings for Trails, Attractions, and Stays
- Dedicated detail pages with rich metadata
- Booking-ready accommodation cards
- Fully responsive, modern UI with Tailwind CSS
- Optimized images via imgix parameters
- Powered by Cosmic content models

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69bb19733704c8f1904d1c53&clone_repository=69bb25b53704c8f1904d1d16)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Discover Bieszczady, Poland’s wild mountain paradise! Find the best hiking trails, local attractions, and cozy accommodations. Book your stay easily through our recommended hotels and guesthouses."

### Code Generation Prompt

> Based on the content model I created for "Discover Bieszczady, Poland’s wild mountain paradise! Find the best hiking trails, local attractions, and cozy accommodations. Book your stay easily through our recommended hotels and guesthouses.", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK

## Getting Started

### Prerequisites
- Bun installed globally
- A Cosmic bucket with the provided content model

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples
```ts
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects.find({ type: 'trails' }).depth(1)
```

## Cosmic CMS Integration
This app uses the Cosmic SDK to fetch Trails, Attractions, and Stays. Connected metafields and select-dropdown values are handled safely using helper utilities in `lib/cosmic.ts`.

## Deployment Options
- **Vercel:** Recommended for Next.js deployments
- **Netlify:** Compatible with static rendering
- **Environment Variables:** Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting dashboard

<!-- README_END -->