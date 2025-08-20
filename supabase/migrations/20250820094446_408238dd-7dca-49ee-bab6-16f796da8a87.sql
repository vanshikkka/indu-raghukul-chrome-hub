-- Create contact_submissions table for storing form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  product_interest TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (no authentication required)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reads (only admins should see submissions)
CREATE POLICY "No public access to submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);