/*
  # Payment and Transaction Tables

  1. New Tables
    - payment_methods
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - provider (text)
      - type (text)
      - last4 (text)
      - expiry_date (text)
      - is_default (boolean)
      
    - transactions
      - id (uuid, primary key)
      - user_id (uuid, references users)
      - amount (numeric)
      - currency (text)
      - status (text)
      - payment_method_id (uuid)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Payment Methods table
CREATE TABLE payment_methods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users ON DELETE CASCADE,
  provider text NOT NULL CHECK (provider IN ('stripe', 'paypal', 'ccavenue', 'paytm', 'billdesk')),
  type text NOT NULL CHECK (type IN ('credit_card', 'debit_card', 'net_banking', 'wallet')),
  last4 text,
  expiry_date text,
  is_default boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE payment_methods ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own payment methods"
  ON payment_methods
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Transactions table
CREATE TABLE transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users ON DELETE CASCADE,
  amount numeric NOT NULL CHECK (amount > 0),
  currency text NOT NULL DEFAULT 'USD',
  status text NOT NULL CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  payment_method_id uuid REFERENCES payment_methods,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own transactions"
  ON transactions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);