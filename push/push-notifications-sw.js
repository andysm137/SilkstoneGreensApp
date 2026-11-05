self.addEventListener('push', (event) => {
  const payload = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(payload.title || 'Silkstone Greens', {
      body: payload.body || '',
      data: { url: payload.url || '../' },
      icon: '../icons/Greens-App-icon-192.jpg',
      badge: '../icons/Greens_App_Notification_Badge.png',
    }),
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(new URL(event.notification.data.url, self.location).href));
});