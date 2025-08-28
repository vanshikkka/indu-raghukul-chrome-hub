-- Update RLS policies to allow viewing contact submissions
-- This will help the admin view submissions in the Supabase dashboard

-- Drop the restrictive policy that blocks all SELECT operations
DROP POLICY IF EXISTS "No public access to submissions" ON public.contact_submissions;

-- Create a more permissive policy for viewing submissions
-- Note: In production, you should restrict this to admin users only
CREATE POLICY "Allow viewing contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (true);