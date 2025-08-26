create extension if not exists "uuid-ossp";

create table if not exists users (
  user_id uuid primary key default uuid_generate_v4(),
  device_id text not null unique,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

create table if not exists user_consent_log (
  consent_id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(user_id) on delete cascade,
  consent_type text not null,
  accepted boolean not null,
  timestamp timestamp default now()
);

create table if not exists usage_events (
  event_id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(user_id) on delete cascade,
  event text not null,
  details jsonb,
  timestamp timestamp default now()
);
