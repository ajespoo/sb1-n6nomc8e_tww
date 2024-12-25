/*
  # Loyalty System Tables

  1. New Tables
    - loyalty_accounts
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - points (numeric)
      - tier (text)
      
    - loyalty_transactions
      - id (uuid, primary key)
      - account_id (uuid, references loyalty_accounts)
      - points (numeric)
      - type (text)
      - description (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Loyalty Accounts table
CREATE TABLE loyalty_accounts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users ON DELETE CASCADE,
  points numeric NOT NULL DEFAULT 0 CHECK (points >= 0),
  tier text NOT NULL DEFAULT 'bronze' CHECK (tier IN ('bronze', 'silver', 'gold', 'platinum')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE loyalty_accounts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own loyalty account"
  ON loyalty_accounts
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Loyalty Transactions table
CREATE TABLE loyalty_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id uuid REFERENCES loyalty_accounts ON DELETE CASCADE,
  points numeric NOT NULL,
  type text NOT NULL CHECK (type IN ('earned', 'redeemed')),
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE loyalty_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own loyalty transactions"
  ON loyalty_transactions
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM loyalty_accounts
      WHERE loyalty_accounts.id = loyalty_transactions.account_id
      AND loyalty_accounts.user_id = auth.uid()
    )
  );