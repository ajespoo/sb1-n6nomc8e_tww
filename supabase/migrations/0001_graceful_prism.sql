/*
  # Initial Schema Setup for Travel Assist Worldwide

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - name (text)
      - role (text)
      - status (text)
      - created_at (timestamp)
      - last_login (timestamp)
      
    - profiles
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - avatar_url (text)
      - home_city (text)
      - current_city (text)
      - mobile (text)
      - languages (text[])
      - gender (text)
      - dob (date)
      
    - travel_plans
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - to_city (text)
      - from_city (text)
      - date_from (date)
      - date_to (date)
      - note (text)
      - status (text)
      
    - messages
      - id (uuid, primary key)
      - sent_from (uuid, references users)
      - sent_to (uuid, references users)
      - content (text)
      - is_read (boolean)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  role text NOT NULL CHECK (role IN ('seeker', 'companion', 'agent', 'admin')),
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users ON DELETE CASCADE,
  avatar_url text,
  home_city text,
  current_city text,
  mobile text,
  languages text[],
  gender text CHECK (gender IN ('m', 'f', 'other')),
  dob date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Travel Plans table
CREATE TABLE travel_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users ON DELETE CASCADE,
  to_city text NOT NULL,
  from_city text NOT NULL,
  date_from date NOT NULL,
  date_to date NOT NULL,
  note text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE travel_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own travel plans"
  ON travel_plans
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create travel plans"
  ON travel_plans
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Messages table
CREATE TABLE messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sent_from uuid REFERENCES users ON DELETE CASCADE,
  sent_to uuid REFERENCES users ON DELETE CASCADE,
  content text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their messages"
  ON messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() = sent_from OR auth.uid() = sent_to);

CREATE POLICY "Users can send messages"
  ON messages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = sent_from);