create extension if not exists pgcrypto;

create table if not exists public.operators (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact_email text,
  status text not null default 'lead',
  created_at timestamptz not null default now()
);

create table if not exists public.venues (
  id uuid primary key default gen_random_uuid(),
  operator_id uuid references public.operators(id) on delete set null,
  name text not null,
  city text not null,
  state text not null,
  status text not null default 'pipeline',
  launched_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.machines (
  id uuid primary key default gen_random_uuid(),
  venue_id uuid references public.venues(id) on delete cascade,
  machine_code text not null unique,
  status text not null default 'active',
  stock_health integer not null default 100,
  last_seen_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.machine_events (
  id uuid primary key default gen_random_uuid(),
  machine_id uuid references public.machines(id) on delete cascade,
  event_type text not null,
  event_value numeric,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_venues_operator_id on public.venues(operator_id);
create index if not exists idx_machines_venue_id on public.machines(venue_id);
create index if not exists idx_machine_events_machine_id on public.machine_events(machine_id);
create index if not exists idx_machine_events_created_at on public.machine_events(created_at desc);
