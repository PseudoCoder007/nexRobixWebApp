-- =========================================================
-- NexRobix Technologies - Supabase PostgreSQL Schema
-- Tables: school_inquiries, lab_audit_requests, brochure_downloads
-- =========================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. SCHOOL INQUIRIES & CONTACT LEADS
create table if not exists public.school_inquiries (
  id uuid primary key default uuid_generate_v4(),
  school_name text not null,
  contact_person text not null,
  designation text,
  email text not null,
  phone text not null,
  city text not null,
  state text not null,
  board text default 'CBSE',
  student_count integer,
  interested_solution text default 'ATL Lab Setup',
  estimated_budget text,
  message text,
  status text default 'new' check (status in ('new', 'contacted', 'survey_scheduled', 'proposal_sent', 'closed_won', 'closed_lost')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. LAB AUDIT & SITE SURVEY REQUESTS
create table if not exists public.lab_audit_requests (
  id uuid primary key default uuid_generate_v4(),
  school_name text not null,
  principal_or_director text not null,
  email text not null,
  phone text not null,
  city text not null,
  state text not null,
  board text not null,
  available_space_sqft text,
  existing_lab_status text,
  preferred_date date,
  specific_requirements text,
  status text default 'pending_review' check (status in ('pending_review', 'assigned_engineer', 'completed', 'cancelled')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. BROCHURE & CURRICULUM DOWNLOADS (Lead Magnet)
create table if not exists public.brochure_downloads (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  school_name text not null,
  designation text,
  email text not null,
  phone text not null,
  document_type text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ROW LEVEL SECURITY (RLS) POLICIES
alter table public.school_inquiries enable row level security;
alter table public.lab_audit_requests enable row level security;
alter table public.brochure_downloads enable row level security;

-- Allow public anonymous inserts for lead generation
create policy "Allow anonymous submissions for inquiries"
  on public.school_inquiries for insert
  with check (true);

create policy "Allow anonymous submissions for lab audits"
  on public.lab_audit_requests for insert
  with check (true);

create policy "Allow anonymous submissions for brochure downloads"
  on public.brochure_downloads for insert
  with check (true);

-- Indexes for efficient querying by status and date
create index if not exists idx_school_inquiries_created_at on public.school_inquiries (created_at desc);
create index if not exists idx_school_inquiries_status on public.school_inquiries (status);
create index if not exists idx_lab_audit_created_at on public.lab_audit_requests (created_at desc);
