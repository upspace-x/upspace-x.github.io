export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // TODO: Integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, just log it
    console.log('Newsletter subscription:', email);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed!' 
    });
  } catch (error) {
    console.error('Newsletter error:', error);
    return res.status(500).json({ error: 'Subscription failed' });
  }
}