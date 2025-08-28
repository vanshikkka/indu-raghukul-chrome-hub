-- Fix the RLS policy issue by ensuring the enquiries table has proper policies
-- First, enable RLS on enquiries table if not already enabled
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Create policies for enquiries table to allow public submissions
CREATE POLICY "Anyone can submit enquiries" 
ON public.enquiries 
FOR INSERT 
WITH CHECK (true);

-- Block public SELECT access to enquiries (admin access only)
CREATE POLICY "No public access to enquiries" 
ON public.enquiries 
FOR SELECT 
USING (false);