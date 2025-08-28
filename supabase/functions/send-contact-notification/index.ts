import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.55.0';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmissionData {
  full_name: string;
  email: string;
  phone: string;
  company_name?: string;
  product_interest?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submissionData: ContactSubmissionData = await req.json();
    
    console.log("Received contact submission:", submissionData);

    // Send notification email to company
    const notificationEmailResponse = await resend.emails.send({
      from: "Indu Raghukul <onboarding@resend.dev>",
      to: ["induraghukulchemicals@gmail.com"], // Replace with your actual company email
      subject: `New Contact Inquiry from ${submissionData.full_name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${submissionData.full_name}</p>
          <p><strong>Email:</strong> ${submissionData.email}</p>
          <p><strong>Phone:</strong> ${submissionData.phone}</p>
          ${submissionData.company_name ? `<p><strong>Company:</strong> ${submissionData.company_name}</p>` : ''}
          ${submissionData.product_interest ? `<p><strong>Product Interest:</strong> ${submissionData.product_interest}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px;">${submissionData.message}</p>
        </div>
        <p style="margin-top: 20px; color: #666;">
          This inquiry was submitted through the Indu Raghukul Chemical Industries website.
        </p>
      `,
    });

    // Send confirmation email to customer
    const confirmationEmailResponse = await resend.emails.send({
      from: "Indu Raghukul <onboarding@resend.dev>",
      to: [submissionData.email],
      subject: "Thank you for contacting Indu Raghukul Chemical Industries",
      html: `
        <h2>Thank you for your inquiry, ${submissionData.full_name}!</h2>
        <p>We have received your message regarding our chemical products and will get back to you as soon as possible.</p>
        
        <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3>Your Inquiry Details:</h3>
          ${submissionData.product_interest ? `<p><strong>Product Interest:</strong> ${submissionData.product_interest}</p>` : ''}
          <p><strong>Message:</strong> ${submissionData.message}</p>
        </div>
        
        <p>Our team of experts will review your requirements and respond within 24 hours.</p>
        
        <p><strong>Contact Information:</strong></p>
        <ul>
          <li>Phone: +91-9425202450, +91-9425202408</li>
          <li>Email: induraghukulchemicals@gmail.com</li>
          <li>Address: Indu Raghukul Chemical Industries, Kharsia, Chhattisgarh 496661, India</li>
        </ul>
        
        <p>Best regards,<br>
        <strong>Indu Raghukul Chemical Industries</strong><br>
        Leading Manufacturer of Premium Chemicals</p>
      `,
    });

    console.log("Notification email sent:", notificationEmailResponse);
    console.log("Confirmation email sent:", confirmationEmailResponse);

    return new Response(JSON.stringify({ 
      success: true,
      notification_email: notificationEmailResponse,
      confirmation_email: confirmationEmailResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);