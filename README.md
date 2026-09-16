# nexRobixWebApp

> **Official Web Platform for NexRobix Technology Private Limited**  
> *Premier STEAM Company & Atal Tinkering Lab (ATL) Setup Partner for K-12 Schools across India.*  
> **Live Domain:** [https://nexrobix.in](https://nexrobix.in) | **Contact:** [nexrobix@gmail.com](mailto:nexrobix@gmail.com)

---

## 🌟 Executive Overview

**NexRobix** is an educational technology and engineering infrastructure company headquartered in Patna, Bihar, expanding across Uttar Pradesh, West Bengal, and Gujarat. 

We partner with CBSE, ICSE, and state board institutions to establish turnkey **Atal Tinkering Labs (ATL)** and **Composite Skill Labs (CSL)** compliant with **NEP 2020** and **CBSE Circular Skill-13/2026**.

Unlike conventional equipment vendors who drop boxes of robotics parts in a room and leave, NexRobix provides a **360-degree ecosystem**:
1. **Turnkey Physical Laboratory Setup:** ESD workbenches, enclosed 3D printers, desktop CNC carvers, educational drones, aerodynamic wind tunnel simulators, and safety gear.
2. **The Resident Engineer Model:** A full-time qualified engineering graduate embedded on the school campus to conduct 30 structured annual periods, maintain machines, and eliminate the burden on regular science teachers.
3. **NEP 2020 & CBSE-Aligned Curriculum:** Grade-wise progression from foundational making (Grades 1–5) to CBSE Skill Code 417 (AI) and 402 (IT) (Grades 6–10) and competition capstones (Grades 11–12).
4. **The School Partnership Money Model:** A fair fee-sharing structure where the school receives **70% of the net operating surplus in Year 1** to fully recover initial lab setup capex within 10–14 months.

---

## 🛠️ Technology Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15+](https://nextjs.org/) | App Router, Server Components & Static Site Generation (SSG) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type safety across components, props, and datasets |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) | Modern CSS utility framework with custom institutional design tokens |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, lightweight vector iconography |
| **Database & Auth** | [Supabase](https://supabase.com/) | Managed PostgreSQL with Row Level Security (RLS) policies |
| **Client Utilities** | `clsx`, `tailwind-merge` | Clean conditional class name merging |
| **Production Target** | [Vercel](https://vercel.com/) / Custom | Configured for custom domain **`nexrobix.in`** |

---

## 🏛️ Brand Design System

To ensure credibility with school trustees, principals, and government evaluators, the user interface avoids generic "vibe-coded" dark sci-fi themes in favor of an authoritative institutional visual language:

- **Executive Navy (`#0A192F` / `#15274B`):** Conveys academic authority, prestige, and institutional stability.
- **Safety Amber / Brand Orange (`#FF6B00`):** Represents tinkering, energy, and hands-on invention (derived from the official NexRobix brand mark).
- **Clean White Canvas (`#FFFFFF`) & Slate (`#F8FAFC`, `#F1F5F9`):** Maximizes readability for technical equipment specifications and comparative matrices.
- **Accents:** Emerald for verified NEP 2020 compliance badges and Cyan for technical callouts.

---

## 🧭 Information Architecture & Pages

The application features 15 production-ready routes:

```text
app/
├── page.tsx                           # Homepage (Hero, Compliance Bar, 5 Pillars, 4-Zone Lab Tour, ROI Calculator, Deployment Blueprint)
├── atl-lab/page.tsx                   # NITI Aayog Atal Tinkering Lab Setup & Packages P1 to P4 Guide
├── composite-skill-lab/page.tsx       # CBSE Circular Skill-13/2026 CSL Lab Tiers (Ignite, Elevate, Pinnacle)
├── curriculum/page.tsx                # K-12 Progressive Curriculum & CBSE Skill Codes 417 (AI) / 402 (IT)
├── resident-trainers/page.tsx         # Full-Time Embedded Engineer Model & 1-Month Bootcamp SOPs
├── hardware-kits/page.tsx             # Searchable & Filterable 160+ Equipment & Kits Catalogue
├── partnership/page.tsx               # School Money Model, 70/30 Year 1 Revenue Share & Trustee FAQs
├── about/page.tsx                     # Corporate Mission, Vision, Patna Base & Leadership Team
├── book-audit/page.tsx                # Zero-Obligation On-Campus Lab & Space Survey Booking Form
├── contact/page.tsx                   # Contact Desk, Regional Networks & Partnership Inquiry Form
└── api/
    ├── audit/route.ts                 # Validates and stores lab audit requests in Supabase
    └── inquiries/route.ts             # Validates and stores school inquiries in Supabase
```

---

## 🗄️ Database Architecture (Supabase PostgreSQL)

The complete SQL migration schema is stored at `supabase/schema.sql`.

### Tables Created:
1. **`school_inquiries`**:
   - Stores prospective school inquiries, contact person details, affiliation board, approximate student counts, budget tier, and messages.
2. **`lab_audit_requests`**:
   - Stores on-campus space survey bookings, room dimensions (e.g. 600–800 sq. ft.), existing lab status, preferred dates, and specific requirements.
3. **`brochure_downloads`**:
   - Lead magnet capture storing school name and email prior to PDF curriculum downloads.

### Security:
- All tables have **Row Level Security (RLS)** enabled.
- Anonymous public `INSERT` policies are enabled for lead submission.
- Read/Update permissions are restricted to authenticated admin users.

---

## 🚀 Getting Started (Local Development)

### 1. Prerequisites
- Node.js `v18.18.0` or higher (recommended: Node `v20+` or `v22+`)
- npm or yarn

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/PseudoCoder007/nexRobixWebApp.git
cd nexRobixWebApp
npm install
```

### 3. Environment Configuration
Copy the example environment file:
```bash
cp .env.example .env.local
```
Update `.env.local` with your Supabase project credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```
*(Note: If left unconfigured, the application gracefully operates in demo/mock mode without breaking or throwing runtime exceptions).*

### 4. Run Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### 5. Production Build
Verify that the project compiles cleanly:
```bash
npm run build
```
*(Output: 15 routes statically generated with 0 errors).*

---

## 🌐 Deploying to Production (`nexrobix.in`)

### Step 1: Deploy on Vercel
1. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
2. Import the `PseudoCoder007/nexRobixWebApp` repository.
3. In **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy**.

### Step 2: Link the Custom Domain `nexrobix.in`
1. In your Vercel Project Dashboard, navigate to **Settings > Domains**.
2. Add **`nexrobix.in`** and **`www.nexrobix.in`**.
3. In your domain registrar DNS manager (GoDaddy, Namecheap, Hostinger, etc.), configure:
   - **A Record**: `@` points to `76.76.21.21`
   - **CNAME Record**: `www` points to `cname.vercel-dns.com`
4. SSL certificates will be provisioned automatically within minutes.

---

## 📋 Readiness Checklist: What is Done vs. What is Needed

### ✅ 100% Completed
- [x] Complete Next.js 15 App Router architecture with TypeScript strict mode.
- [x] Institutional brand redesign (Navy, Amber, Slate) replacing the old vibe-coded prototype.
- [x] Full NITI Aayog ATL Packages P1 to P4 and ₹20L grant lifecycle breakdown.
- [x] CBSE Circular Skill-13/2026 Composite Skill Lab 3-tier catalog (Ignite, Elevate, Pinnacle).
- [x] Interactive School ROI and Money Model Calculator (dynamic fee share math).
- [x] Interactive 4-Zone Lab Showcase and Searchable 160+ Equipment Catalogue.
- [x] K-12 Progressive Curriculum aligned to CBSE Skill Codes 417 (AI) and 402 (IT).
- [x] Full-time Resident Engineer model documentation and safety SOPs.
- [x] Supabase PostgreSQL client, API routes (`/api/inquiries`, `/api/audit`), and `schema.sql`.
- [x] Responsive layout tested across desktop, laptop, tablet, and mobile screens.
- [x] Production build tested and compiling with 0 errors (`next build`).

### 🔜 To Make it 100% Live in Production
1. **Set Up Supabase Project:**
   - Create a free project at [supabase.com](https://supabase.com).
   - Go to the **SQL Editor**, paste the contents of `supabase/schema.sql`, and click **Run**.
   - Copy Project URL & Anon API Key into `.env.local` (and Vercel environment variables).
2. **Domain DNS Mapping:**
   - Add `nexrobix.in` to Vercel and point your registrar's A/CNAME records as detailed above.
3. **(Optional) Automated Email Alerts:**
   - Integrate an email provider (such as [Resend](https://resend.com/)) in `/api/audit/route.ts` if you want instant notification emails sent directly to `nexrobix@gmail.com` whenever a school principal submits a survey request.

---

## 📄 License & Attribution

© 2026 **NexRobix Technology Private Limited**. All Rights Reserved.  
*Motto: Learn • Build • Innovate*
