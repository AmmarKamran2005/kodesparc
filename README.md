# Kodesparc - Premium Portfolio Website

A modern, agency-grade portfolio website built with **Next.js 14+**, **App Router**, and **Tailwind CSS**.

## 🚀 Features

- **Modern Design**: Glassmorphism cards, soft shadows, and neon-edge aesthetic
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Fast load times with Next.js optimizations
- **Premium Animations**: Smooth transitions and interactive elements
- **Dark Mode**: Beautiful dark theme with electric blue and lime spark accents
- **SEO Ready**: Proper metadata, structured data, and semantic HTML

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (`#3B82F6`)
- **Secondary**: Dark Slate (`#0F172A`)
- **Accent**: Lime Spark (`#A3FF12`)
- **Background**: Deep Navy (`#0A0E27`)
- **Neon Cyan**: (`#00E5FF`) - For glow effects

### Typography
- **Font Family**: Geist (default Next.js font)
- **Headings**: Bold with gradient text effects
- **Body**: Clean, readable sans-serif

## 📁 Project Structure

```
app/
├── page.tsx                 # Hero/Home page
├── services/page.tsx        # Services section
├── projects/page.tsx        # Projects showcase
├── about/page.tsx          # About page
├── contact/page.tsx        # Contact & form
├── layout.tsx              # Root layout
└── globals.css             # Global styles & design tokens

components/
├── navbar.tsx              # Navigation bar
└── footer.tsx              # Footer component
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Lucide React icons
- **Language**: TypeScript (optional)
- **Animations**: CSS animations + Tailwind

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repo-url>
cd kodesparc
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## 📝 Customization

### Update Content

1. **Hero Section** (`/app/page.tsx`)
   - Change title, subtitle, and CTA buttons
   - Modify particle animation settings

2. **Services** (`/app/services/page.tsx`)
   - Add/remove services in the `services` array
   - Update technology tags and descriptions

3. **Projects** (`/app/projects/page.tsx`)
   - Update project data with real links
   - Modify project features and tech stack

4. **About** (`/app/about/page.tsx`)
   - Update company mission and values
   - Change statistics and expertise

5. **Contact** (`/app/contact/page.tsx`)
   - Update contact information
   - Configure form submission endpoint

### Update Colors

Edit `/app/globals.css`:
```css
:root {
  --primary: #3b82f6;        /* Change primary color */
  --accent: #a3ff12;         /* Change accent color */
  --background: #0a0e27;     /* Change background */
  /* ... other colors */
}
```

### Update Navigation

Edit `/components/navbar.tsx`:
- Modify `navItems` array for menu links
- Update logo and branding

## 🎯 Key Components

### Navbar
- Fixed navigation with glassmorphism effect
- Mobile-responsive hamburger menu
- Smooth transitions and hover effects

### Footer
- Company info and quick links
- Social media links
- Minimal, clean design

### Glass Cards
- Reusable component with backdrop blur
- Hover animations with glow effects
- Responsive padding and sizing

### Gradient Text
- Beautiful gradient from primary to accent
- Used for main headings
- Eye-catching and modern

## 🔧 Customization Tips

1. **Add More Pages**: Create new folders in `/app/` with `page.tsx`
2. **Create Components**: Add reusable components in `/components/`
3. **Update Fonts**: Modify font imports in `/app/layout.tsx`
4. **Change Theme**: Update CSS variables in `/app/globals.css`

## 📱 Responsive Design

- **Mobile**: 320px and up
- **Tablet**: 768px (md breakpoint)
- **Desktop**: 1024px (lg breakpoint)

All components use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)

## ⚡ Performance Optimizations

- Next.js Image optimization
- Dynamic imports for code splitting
- CSS variables for theme switching
- Efficient animations with CSS-only options

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure environment variables
4. Click Deploy

### Deploy to Other Platforms

- **Netlify**: Connect GitHub repo, build command: `npm run build`
- **AWS**: Use AWS Amplify or S3 + CloudFront
- **Self-hosted**: Use `npm run build` and `npm run start`

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Vercel Deployment](https://vercel.com/docs)

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Kodesparc**
