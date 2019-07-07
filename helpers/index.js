function trackPageView(url) {
  try {
    window.gtag("config", "UA-143351878-1", {
      page_location: url
    });
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}
