// api.js

export const fetchPrograms = async () => {
  try {
    const response = await fetch('/api/programs');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
};

export const sendMessage = async (messageData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageData),
    });
    if (response.ok) {
      return 'Message sent successfully!';
    } else {
      throw new Error('Failed to send message.');
    }
  } catch (error) {
    console.error('Error sending message:', error);
    return 'Error sending message.';
  }
};

export const donate = async (amount) => {
  try {
    const response = await fetch('/api/donate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    if (response.ok) {
      return 'Thank you for your donation!';
    } else {
      throw new Error('Donation failed.');
    }
  } catch (error) {
    console.error('Error making donation:', error);
    return 'Error making donation.';
  }
};
