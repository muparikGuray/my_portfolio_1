# Mubarik Guray - Portfolio Website

## Overview
Professional portfolio website for Mubarik Guray, Software Engineer Student & AI SaaS Builder from Hargeisa, Somaliland.

## Features

### 1. WhatsApp Business Integration
- **Click-to-chat widget** with floating button
- **Smart device detection** (mobile app vs web)
- **Customizable messages** with pre-filled templates
- **Fallback support** for unsupported browsers
- **Phone number**: +252636691671

### 2. Professional Color Scheme
- **Primary**: Blue tones (#1e40af, #1d4ed8, #1e3a8a)
- **Secondary**: Green tones (#059669, #047857, #065f46)
- **Accent**: Red tones (#dc2626, #b91c1c, #991b1b)
- **WCAG 2.1 AA compliant** contrast ratios

### 3. Admin Dashboard
- **Secure authentication** with session management
- **CRUD operations** for all content sections
- **Role-based access control**
- **Data validation and sanitization**
- **Backup/restore functionality**

### 4. Content Management
- **Projects**: Full project portfolio management
- **About Section**: Bio, contact info, social links
- **Skills**: Technical skills with proficiency levels
- **Services**: Service offerings and descriptions

## Technical Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom theme
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context

## Admin Panel Access

### Login Credentials
- **URL**: `/admin`
- **Username**: `admin`
- **Password**: `MubarikGuray2025!`

### Security Features
- **Session timeout**: 24 hours
- **Rate limiting**: 5 failed attempts
- **CSRF protection**: Built-in
- **XSS prevention**: Input sanitization
- **Secure storage**: LocalStorage with encryption

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Structure

```
src/
├── components/
│   ├── AdminDashboard.tsx    # Main admin interface
│   ├── AdminLogin.tsx        # Secure login form
│   ├── AdminPanel.tsx        # Admin routing logic
│   ├── WhatsAppWidget.tsx    # WhatsApp integration
│   ├── Navbar.tsx           # Navigation (Testimonials removed)
│   ├── Hero.tsx             # Landing section
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Project showcase
│   ├── Skills.tsx           # Technical skills
│   ├── Services.tsx         # Service offerings
│   └── Contact.tsx          # Contact form
├── context/
│   └── ThemeContext.tsx     # Dark/light theme
└── types/
    └── index.ts             # TypeScript interfaces
```

## Color Palette Reference

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | #1e40af | Main buttons, links |
| Primary Dark | #1e3a8a | Hover states |
| Secondary Green | #059669 | Success states, WhatsApp |
| Secondary Dark | #065f46 | Green hover states |
| Accent Red | #dc2626 | Error states, warnings |
| Accent Dark | #991b1b | Red hover states |

## Admin Panel Features

### Dashboard
- **Analytics overview** with key metrics
- **Quick stats** for projects, skills, services
- **Recent activity** tracking
- **System status** monitoring

### Project Management
- **Add/Edit/Delete** projects
- **Image upload** with optimization
- **Technology stack** management
- **Status tracking** (active, completed, draft)
- **Category organization**

### Content Sections
- **Rich text editor** for descriptions
- **Image management** with validation
- **Social media links** management
- **Contact information** updates

## Security Measures

### Authentication
- **Bcrypt password hashing** (simulated)
- **Session token generation**
- **Automatic session expiry**
- **Failed attempt tracking**

### Data Protection
- **Input validation** on all forms
- **XSS prevention** with sanitization
- **CSRF token validation**
- **Secure data storage**

### Access Control
- **Role-based permissions**
- **Route protection**
- **Admin-only areas**
- **Audit logging**

## Testing Checklist

### WhatsApp Integration
- ✅ Mobile device detection
- ✅ WhatsApp app opening
- ✅ Web fallback functionality
- ✅ Custom message handling
- ✅ Phone number formatting

### Admin Panel
- ✅ Secure login process
- ✅ Session management
- ✅ CRUD operations
- ✅ Data validation
- ✅ Error handling

### Responsive Design
- ✅ Mobile compatibility
- ✅ Tablet optimization
- ✅ Desktop functionality
- ✅ Cross-browser support

### Accessibility
- ✅ WCAG 2.1 AA compliance
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Focus indicators

## Deployment Notes

### Environment Variables
```env
VITE_ADMIN_USERNAME=admin
VITE_ADMIN_PASSWORD=MubarikGuray2025!
VITE_WHATSAPP_NUMBER=+252636691671
```

### Build Optimization
- **Code splitting** for admin panel
- **Image optimization** for web performance
- **CSS purging** for smaller bundle size
- **Lazy loading** for components

## Support & Maintenance

### Regular Updates
- **Security patches** monthly
- **Content updates** via admin panel
- **Performance monitoring**
- **Backup procedures**

### Contact Information
- **Developer**: Mubarik Guray
- **Email**: mubarikcabdi143@gmail.com
- **Phone**: +252636691671
- **Location**: Hargeisa, Somaliland

---

**Last Updated**: January 2025
**Version**: 2.0.0
**License**: Private - All Rights Reserved